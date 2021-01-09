import Popup from './Popup.svelte';

const popup = new Popup({
  target: document.body,
  props: {
    name: 'Hello'
  }
});

export default popup;