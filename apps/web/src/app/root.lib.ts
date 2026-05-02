import { useEffect, useState } from 'react';
import { toPng } from 'html-to-image';

// NOTE: Sora font links are now hardcoded directly in root.tsx <head> instead of
// being exposed via React Router's `links` export + <Links /> component. With
// `ssr: false`, the prerendered shell does NOT execute <Links />, but the
// hydrating client does — producing a structural <head> mismatch that throws an
// uncaught hydration error (which the parent sandbox surfaces as a "crash").
// Hardcoding keeps the server and client markup identical.
export const links = () => [];

/**
 * useHmrConnection()
 * ------------------
 * • `true`  → HMR socket is healthy
 * • `false` → socket lost (Vite is polling / may auto‑reload soon)
 *
 * Works only in dev; in prod it always returns `true`.
 */
export function useHmrConnection(): boolean {
  const [connected, setConnected] = useState(() => !!import.meta.hot);

  useEffect(() => {
    if (!import.meta.hot) return;

    const onDisconnect = () => setConnected(false);
    const onConnect = () => setConnected(true);

    import.meta.hot.on('vite:ws:disconnect', onDisconnect);
    import.meta.hot.on('vite:ws:connect', onConnect);

    const onFullReload = () => setConnected(false);
    import.meta.hot.on('vite:beforeFullReload', onFullReload);

    return () => {
      import.meta.hot?.off('vite:ws:disconnect', onDisconnect);
      import.meta.hot?.off('vite:ws:connect', onConnect);
      import.meta.hot?.off('vite:beforeFullReload', onFullReload);
    };
  }, []);

  return connected;
}

const healthyResponseType = 'sandbox:web:healthcheck:response';

export const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected,
      supportsErrorDetected: true,
    };
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:web:healthcheck') {
        window.parent.postMessage(healthyResponse, '*');
      }
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage(healthyResponse, '*');
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isHmrConnected]);
};

const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);

  await Promise.all([
    'fonts' in document ? document.fonts.ready : Promise.resolve(),
    ...images.map(
      (img) =>
        new Promise((resolve) => {
          img.crossOrigin = 'anonymous';
          if (img.complete) {
            resolve(true);
            return;
          }
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        })
    ),
  ]);

  await new Promise((resolve) => setTimeout(resolve, 250));
};

export const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data.type === 'sandbox:web:screenshot:request') {
        try {
          await waitForScreenshotReady();

          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);

          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              width: `${width}px`,
              height: `${height}px`,
              margin: '0',
            },
          });

          window.parent.postMessage({ type: 'sandbox:web:screenshot:response', dataUrl }, '*');
        } catch (error) {
          window.parent.postMessage(
            {
              type: 'sandbox:web:screenshot:error',
              error: error instanceof Error ? error.message : String(error),
            },
            '*'
          );
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
};
