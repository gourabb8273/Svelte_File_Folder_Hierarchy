<svelte:options tag="my-input-header" />
<script lang="ts">
  import { itemList } from "../../stores/ItemList";
  import itemType from "../constants/ItemType";
  import { v4 as uuidv4 } from "uuid";
  import Navbar from "./Navbar.svelte";
  import Button from "./Button.svelte";

  let name: String, selectedType: String, selectedFolder: String;

  type File = {
    name: String;
    type: String;
    id: String;
    createdAt: Date;
  };
  interface List {
    name: String;
    id: String;
    type: String;
    createdAt: Date;
    files?: Array<File>;
  }

  const title = "My Web Component";

  //Getting available folder list from store
  $: level =
    $itemList && $itemList.length
      ? [
          "Root",
          ...$itemList
            .filter((list) => list.type == itemType.FOLDER)
            .map((list) => list.name),
        ]
      : ["Root"];

  //Saving file or folder
  function handleSave() {
    if (!name || !selectedType) {
      alert("Please choose a name before saving!");
      return;
    }
    console.log($itemList);
    itemList.update((list: Array<List>) => {
      if (selectedFolder === "Root")
        return [
          ...list,
          {
            name: name,
            type: selectedType,
            id: uuidv4(),
            createdAt: new Date(),
          },
        ];
      else if (selectedFolder) {
        const fileInfo = {
          name,
          type: selectedType,
          id: uuidv4(),
          createdAt: new Date(),
        };
        var newList = list.map((l) => {
          if (l.name === selectedFolder) {
            let files = l.files ? [...l.files, fileInfo] : [fileInfo];
            return { ...l, files };
          } else return l;
        });
        return [...newList];
      }
    });
    name = "";
  }

  //Deleting all folder and file
  function handleClearAll() {
    itemList.set([]);
    name = "";
    level = ["Root"];
  }

  //Reseting entered value
  function handleCancel() {
    name = "";
    level = ["Root"];
  }
</script>

<Navbar {title} />
<div class="input-header">
  <input
    bind:value={name}
    class="input-text"
    type="text"
    placeholder="Please add a file or folder name"
  />
  <div class="input-type">
    <select name="type" id="select-type" bind:value={selectedType}>
      <option value={itemType.FOLDER}>{itemType.FOLDER}</option>
      <option value={itemType.FILE}>{itemType.FILE}</option>
    </select>
  </div>
  {#if level && level.length}
    <div class="folder-list">
      <select name="type" id="folder-list-type" bind:value={selectedFolder}>
        {#each level as name}
          <option value={name}>{name}</option>
        {/each}
      </select>
    </div>
  {/if}
  <Button
    button_name="Save"
    style_class="save-button"
    handle_click={handleSave}
  />
  <Button
    button_name="Cancel"
    style_class="cancel-button"
    handle_click={handleCancel}
  />
  <Button
    button_name="Clear All"
    style_class="clear-button"
    handle_click={handleClearAll}
  />
</div>

<style>
  .input-header {
    display: flex;
    width: 58%;
    height: 40px;
    margin: 5% 25% 1% 18%;
  }
  .input-text {
    flex: 4;
    margin-right: 10px;
    outline: none;
    margin-right: 10px;
    margin-left: 0px;
    border-radius: 3px;
    border: 1px solid rgba(78, 78, 87, 0.596);
  }
  input[type="text"] {
    font-size: 20px;
    padding-left: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  ::placeholder {
    padding-left: 2px;
    font-size: medium;
    font-weight: 400;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .input-type {
    display: flex;
    flex: 1;
  }
  #select-type {
    margin-right: 8px;
    border-radius: 3px;
    width: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .folder-list {
    display: flex;
    flex: 1.5;
  }
  #folder-list-type {
    margin-right: 8px;
    border-radius: 3px;
    width: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
