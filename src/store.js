import { writable } from "svelte/store";

export const availableSites = writable([
  "https://www.google.com/",
  "https://www.imdb.com/",
  "https://en.wikipedia.org/wiki/Main_Page",
]);
