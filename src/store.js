import { writable } from "svelte/store";

export const availableSites = writable([
  "https://www.google.com/",
  "https://www.youtube.com/",
]);
