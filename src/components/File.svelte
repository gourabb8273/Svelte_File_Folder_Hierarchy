<svelte:options tag="my-file" />
<script lang="ts">
  import Icon from "@iconify/svelte";
  import itemType from "../constants/ItemType";
  export let name;
  export let type;
</script>

<div class="file-info">
  <div class="file-icon">
    {#if type === itemType.FOLDER}
      <Icon icon="mdi-light:folder" />
    {:else if type === itemType.FILE}
      <Icon icon="mdi-light:file" />
    {/if}
  </div>
  <div class="file-body">
    <span class="file-name">{name}</span>
  </div>
</div>

<style>
  .file-info {
    display: flex;
  }
  .file-icon {
    display: flex;
    flex: 2%;
    padding: 12px;
  }
  .file-body {
    display: flex;
    flex: 98%;
  }
  .file-name {
    font-size: 16px;
    width: 100%;
    background: rgb(255, 255, 254);
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    padding-left: 20px;
  }
</style>
