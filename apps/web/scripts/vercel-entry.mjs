import { createRequestHandler } from 'react-router';
import { getRequestListener } from '@hono/node-server';
import * as build from '../build/server/assets/server-build.js';

const handler = createRequestHandler(build, 'production');

export default getRequestListener((req) => handler(req));
