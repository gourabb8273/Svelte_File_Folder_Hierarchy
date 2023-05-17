<svelte:options tag="my-folder" />
<script lang="ts">
  import Icon from "@iconify/svelte";
  import File from "./File.svelte";
  import Button from "./Button.svelte";

  export let expanded = false;
  export let name;
  export let files;

  function handleToggle() {
    expanded = !expanded;
  }

</script>

<div class="hierarchy-list">
  <div class="folder-info">
    <div>
      <Icon icon="mdi-light:folder" />
    </div>
    <div>
      <Button
        handle_click={handleToggle}
        button_name={name}
        style_class="expanded"
      />      
    </div>
  </div>

  {#if expanded}
    <ul>
      {#each files as file}
        <li>
          {#if file.files}
            <svelte:self {...file} />
          {:else}
            <File {...file} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .folder-info {
    display: flex;
  }

  .hierarchy-list li {
    margin: 5px;
    padding: 5px;
  }
  
  ul {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid #eee;
  }

  li {
    padding: 0.2em 0;
  }
</style>
