<svelte:options tag="my-dashboard-component" />
<script lang="ts">
  import InputHeader from "./components/InputHeader.svelte";
  import { itemList } from "../stores/ItemList";
  import Folder from "./components/Folder.svelte";
</script>

<InputHeader />
<div class="hierarchy-body">
  <Folder name="Root Level" files={$itemList} expanded />
</div>

<style>
  .hierarchy-body {
    background: rgba(241, 241, 255, 0.342);
    width: 57%;
    margin: 0 18% 0 18%;
    padding: 7px;
  }
</style>
