/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/solid-start/server'
import { getRouterManifest } from '@tanstack/solid-start/router-manifest'

import { createRouter } from './app/router'

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler)
