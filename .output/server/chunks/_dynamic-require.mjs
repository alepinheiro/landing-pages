const dynamicChunks = {
 ['components/heccus-turbo-form.js']: () => import('./heccus-turbo-form.mjs').then(function (n) { return n.h; }),
 ['pages/index.js']: () => import('./index.mjs').then(function (n) { return n.i; }),
 ['pages/HeccusTurbo/index.js']: () => import('./index2.mjs').then(function (n) { return n.i; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
