### Svelte Chrome extension example


#### Build
To build the compiler, and all the other modules included in the package:
```bash
npm run build
```

#### Development
To watch for changes and continually rebuild the package (this is useful if you're using npm link to test out changes in a project locally):
```bash
npm run dev
```

#### File structure
```
│   manifest.json    
│
└───content
│   │   package.json
│   │   rollup.config.js
│   │
│   └───src
│   │   └───app
│   │   └───popup
│   │
│   │
│   └───public
│       └───app
│       └───popup
│
└───icons
```
