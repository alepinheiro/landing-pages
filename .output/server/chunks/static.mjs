import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/HeccusTurbo/_nuxt/410a8fc.js": {
    "type": "application/javascript",
    "etag": "\"95c-2YiWD3mrCbBGQoaUQPHM6sSao3c\"",
    "mtime": "2022-04-28T21:37:43.762Z",
    "path": "../public/HeccusTurbo/_nuxt/410a8fc.js"
  },
  "/HeccusTurbo/_nuxt/4de5b55.js": {
    "type": "application/javascript",
    "etag": "\"3a49d-5L3nG2qm2uxGEAnFvk5oVjUStxc\"",
    "mtime": "2022-04-28T21:37:43.761Z",
    "path": "../public/HeccusTurbo/_nuxt/4de5b55.js"
  },
  "/HeccusTurbo/_nuxt/55184bc.js": {
    "type": "application/javascript",
    "etag": "\"c680-rmbdLPDICHYu31R2V2fVyHrYW38\"",
    "mtime": "2022-04-28T21:37:43.761Z",
    "path": "../public/HeccusTurbo/_nuxt/55184bc.js"
  },
  "/HeccusTurbo/_nuxt/6823eae.js": {
    "type": "application/javascript",
    "etag": "\"14b55-mha1DXu4JdeBY7KPZfdTkMWJk54\"",
    "mtime": "2022-04-28T21:37:43.762Z",
    "path": "../public/HeccusTurbo/_nuxt/6823eae.js"
  },
  "/HeccusTurbo/_nuxt/75a23bf.js": {
    "type": "application/javascript",
    "etag": "\"552-sYT5RtHg/cl0ezZkmxw4NDiUPqo\"",
    "mtime": "2022-04-28T21:37:43.761Z",
    "path": "../public/HeccusTurbo/_nuxt/75a23bf.js"
  },
  "/HeccusTurbo/_nuxt/92a38e6.js": {
    "type": "application/javascript",
    "etag": "\"2e14-AXOFdj9EFWFflBSADCq6vZc8qz0\"",
    "mtime": "2022-04-28T21:37:43.761Z",
    "path": "../public/HeccusTurbo/_nuxt/92a38e6.js"
  },
  "/HeccusTurbo/_nuxt/98e46d0.js": {
    "type": "application/javascript",
    "etag": "\"180a-QGeMLwF5Vp94dCrK8F9cKzZhRwg\"",
    "mtime": "2022-04-28T21:37:43.761Z",
    "path": "../public/HeccusTurbo/_nuxt/98e46d0.js"
  },
  "/HeccusTurbo/_nuxt/c593dc6.js": {
    "type": "application/javascript",
    "etag": "\"101c6-DsJWE/5xuN4IHbvCtAqzv6ybu0w\"",
    "mtime": "2022-04-28T21:37:43.761Z",
    "path": "../public/HeccusTurbo/_nuxt/c593dc6.js"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/HeccusTurbo/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _static = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

export { _static as default };
