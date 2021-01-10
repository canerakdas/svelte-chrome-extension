<script>
  export let name;
</script>

<style>
  .svelte-widget-container {
    position: fixed;
    left: 5px;
    bottom: 5px;
    background: #d0d0d0;
    color: #565656;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 5px #9e9e9e;
    font-weight: bold;
    font-size: 14px;
    width: 200px;
    text-align: center;
    z-index: 99999999999;
  }
</style>

<main class="svelte-widget-container">
  <div>Hello {name}</div>
</main>
