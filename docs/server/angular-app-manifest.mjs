
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tutorial-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/tutorial-app"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/justificacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/instalacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/primerospasos"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/utilizacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/funcionamiento"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/conclusiones"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/recursos"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-app/ejemplo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 846, hash: '0cb2a3047c9cfd793b5730f687bdb15cd7c48133a42dea7d8552062512faf47d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '5a35824d90174e711c45b829c637274ac31795f3ca7f31b8c87cd0ff6de338eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7844, hash: 'b950b64bd96754c4590043733730e8d28ac51664ec1498a372134d82446bacbc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'conclusiones/index.html': {size: 14945, hash: '1e93d16a520fdbcc7c26f48c3ab3f5767c77abf072ecbaf746bb32fff372aab3', text: () => import('./assets-chunks/conclusiones_index_html.mjs').then(m => m.default)},
    'primerospasos/index.html': {size: 19463, hash: '071bd407876e13c01db3f7c4efb7d8871e3845de7361ce5c7167ab5019372228', text: () => import('./assets-chunks/primerospasos_index_html.mjs').then(m => m.default)},
    'justificacion/index.html': {size: 14802, hash: 'e79f0c7500f4281ae2e32fa402e4536dd141a9fd47a04a029e30c27c808fda72', text: () => import('./assets-chunks/justificacion_index_html.mjs').then(m => m.default)},
    'recursos/index.html': {size: 14932, hash: '90cab8015e860a223041ea27fc3aab7beaad800611783f0bbbf7746d4eb38e42', text: () => import('./assets-chunks/recursos_index_html.mjs').then(m => m.default)},
    'instalacion/index.html': {size: 23209, hash: '5101839479b3cc838db3570745a0544f0194e2e517df5a64921b0fb8395891c6', text: () => import('./assets-chunks/instalacion_index_html.mjs').then(m => m.default)},
    'ejemplo/index.html': {size: 15966, hash: '84175f9784338eb8bcdacea848e3db45363a687231e510b59fd9f1f7f12b1650', text: () => import('./assets-chunks/ejemplo_index_html.mjs').then(m => m.default)},
    'funcionamiento/index.html': {size: 17590, hash: 'b033e1e9bf46eb0f8ec857074c9ffbe6712aa0a2b0c6a04d112228feb48d137f', text: () => import('./assets-chunks/funcionamiento_index_html.mjs').then(m => m.default)},
    'utilizacion/index.html': {size: 17109, hash: '276046bee1085b88687cd428262eaff2b68765748e49b6085ac9ed64875a2faa', text: () => import('./assets-chunks/utilizacion_index_html.mjs').then(m => m.default)},
    'styles-IWZ37BA6.css': {size: 2628, hash: 'yJLtua9Vf2k', text: () => import('./assets-chunks/styles-IWZ37BA6_css.mjs').then(m => m.default)}
  },
};
