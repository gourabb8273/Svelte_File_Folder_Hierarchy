import { writable } from "svelte/store";
const myItem = [];
export const itemList = writable(myItem);