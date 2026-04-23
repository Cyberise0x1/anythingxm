export interface StyleInfo {
  className: string;
  styles: Record<string, string> | null;
}

export interface ResolvedElement {
  element: Element;
  renderId: string;
}

export type GetStyleInfo = (resolved: ResolvedElement) => StyleInfo;

type ReselectFn = () => void;

const RENDER_ID_ATTR = 'data-render-id';

function findElementByRenderId(renderId: string): Element | null {
  return document.querySelector(`[${RENDER_ID_ATTR}="${renderId}"]`);
}

export function initDesignMode(getStyleInfo: GetStyleInfo): ReselectFn {
  if (typeof window === 'undefined') {
    return () => {};
  }

  let selectedRenderId: string | null = null;

  function postToParent(message: unknown) {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(message, '*');
      }
    } catch (_) {}
  }

  function selectElement(renderId: string) {
    const element = findElementByRenderId(renderId);
    if (!element) {
      postToParent({
        type: 'sandbox:web:element-info',
        renderId,
        found: false,
      });
      return;
    }

    selectedRenderId = renderId;
    const info = getStyleInfo({ element, renderId });

    const rect = element.getBoundingClientRect();
    postToParent({
      type: 'sandbox:web:element-info',
      renderId,
      found: true,
      className: info.className,
      styles: info.styles,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    });
  }

  function reselect() {
    if (selectedRenderId) {
      selectElement(selectedRenderId);
    }
  }

  function handleMessage(event: MessageEvent) {
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    switch (data.type) {
      case 'sandbox:web:select-element': {
        if (typeof data.renderId === 'string') {
          selectElement(data.renderId);
        }
        break;
      }
      case 'sandbox:web:deselect-element': {
        selectedRenderId = null;
        break;
      }
      case 'sandbox:web:get-element-list': {
        const elements = document.querySelectorAll(`[${RENDER_ID_ATTR}]`);
        const list = Array.from(elements).map((el) => ({
          renderId: el.getAttribute(RENDER_ID_ATTR),
          tagName: el.tagName.toLowerCase(),
          className: el instanceof HTMLElement ? el.className : '',
        }));
        postToParent({ type: 'sandbox:web:element-list', elements: list });
        break;
      }
    }
  }

  window.addEventListener('message', handleMessage);

  postToParent({ type: 'sandbox:web:design-mode-ready' });

  return reselect;
}
