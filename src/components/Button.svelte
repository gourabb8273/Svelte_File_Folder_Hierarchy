<svelte:options tag="my-button" />
<script lang="ts">
  export let button_name;
  export let handle_click;
  export let style_class;
</script>

<div class="input-button">
  <button on:click={handle_click} class={style_class}>{button_name}</button>
</div>

<style>
  .input-button {
    flex: 1.5;
    display: flex;
  }
  .cancel-button {
    width: 100%;
    margin-right: 10px;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(192, 99, 99);
    color: white;
    border-radius: 3px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .save-button {
    width: 100%;
    margin-right: 10px;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(96, 73, 199);
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 3px;
  }
  .clear-button {
    width: 100%;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(226, 44, 44);
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 3px;
  }
  .expanded {
    border: none;
    background: rgba(241, 241, 255, 0.342);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: medium;
    font-weight: 600;
  }
</style>
