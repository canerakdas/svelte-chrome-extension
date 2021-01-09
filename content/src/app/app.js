import App from './App.svelte';

const SVELTE_CONTAINER = 'svelte-extension-wrapper';
const container = document.createElement('div');
container.id = SVELTE_CONTAINER;
document.body.appendChild(container);

const app = new App({
  target: document.getElementById(SVELTE_CONTAINER),
  props: {
    name: 'hello'
  }
});

export default app;