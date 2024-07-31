# Project 
React + Vite + Tailwind CSS Jobs (crud json-server)

## Getting Started

* Install Backend json-server

```
npm i -D json-sever
```

* Run the json server
```
npm run sever

```
* Config the package.json

```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "server": "json-server --watch src/jobs.json --port 8000"
  }

```
* Config  proxy on vite.config.js
```
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

* Install Frontend  React + Vite:

```
npm i -D json-sever
```

* Run the Frontend:
```
npm run dev
```

* [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

```
npm install -D tailwindcss postcss autoprefixer
```
```
npx tailwindcss init -p
```
## Hooks:
useState, useEffect, useNavigate, useParams, useLoaderData

## Libraries: 
react-icons, react-router-dom, react-toastify, Tailwind css, 


## Authors

Jun Wang




