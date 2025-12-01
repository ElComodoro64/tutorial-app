
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/justificacion"
  },
  {
    "renderMode": 2,
    "route": "/instalacion"
  },
  {
    "renderMode": 2,
    "route": "/primerospasos"
  },
  {
    "renderMode": 2,
    "route": "/utilizacion"
  },
  {
    "renderMode": 2,
    "route": "/funcionamiento"
  },
  {
    "renderMode": 2,
    "route": "/conclusiones"
  },
  {
    "renderMode": 2,
    "route": "/recursos"
  },
  {
    "renderMode": 2,
    "route": "/ejemplo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 834, hash: '9143797da545aac70a08ab32329aa72b44f002a29a3ed004d8de71a740885edf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '78a9dd639f88726569beb8a997904877ded903a1c1573e7fc5dead0b77ebf02f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'justificacion/index.html': {size: 14682, hash: 'caadfa2cea60cb8737508893b66e1ce8c2407c4e16d9442d628e642ed7125ce9', text: () => import('./assets-chunks/justificacion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7724, hash: 'c8ef76c4bd67bddba4259e48f45cd22105aa694911bbc6df727de5a7bb4b1e56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'funcionamiento/index.html': {size: 17470, hash: '69fb86a15620806bd401325fa6e3b5901fd59199c9cf0b6e05149ee646d6c2a4', text: () => import('./assets-chunks/funcionamiento_index_html.mjs').then(m => m.default)},
    'conclusiones/index.html': {size: 14825, hash: 'f6b588620e1ee7d172236514feb66b8fcafba8fa15edc21ae5f7d7f7368d0c8d', text: () => import('./assets-chunks/conclusiones_index_html.mjs').then(m => m.default)},
    'recursos/index.html': {size: 14812, hash: 'c521010d8281ea278c4087c6c1184610a12df67b2fd897dde93d87408171e065', text: () => import('./assets-chunks/recursos_index_html.mjs').then(m => m.default)},
    'primerospasos/index.html': {size: 19343, hash: '0df5e6cba77995cb47f6b1c1a6f389ddf76399e8ed2ee2c02a383fb485adadb4', text: () => import('./assets-chunks/primerospasos_index_html.mjs').then(m => m.default)},
    'ejemplo/index.html': {size: 15846, hash: '0647c81368a4dc9c44c62cd531de0bfb0659cf9eadcd3e25c79dbae8cfd2fd49', text: () => import('./assets-chunks/ejemplo_index_html.mjs').then(m => m.default)},
    'utilizacion/index.html': {size: 16989, hash: '1f5dece2c1b845f4a5b84b94e68bb4ffcf97ffcd11cf8594deac7f829fd5ec12', text: () => import('./assets-chunks/utilizacion_index_html.mjs').then(m => m.default)},
    'instalacion/index.html': {size: 23089, hash: '1c1fda0a044dda93b40adfb1a182d2cd6c6be333fd2fdb14cfb9a5f97b4409ec', text: () => import('./assets-chunks/instalacion_index_html.mjs').then(m => m.default)},
    'styles-IWZ37BA6.css': {size: 2628, hash: 'yJLtua9Vf2k', text: () => import('./assets-chunks/styles-IWZ37BA6_css.mjs').then(m => m.default)}
  },
};
