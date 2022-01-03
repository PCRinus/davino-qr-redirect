<script>
  import { onMount } from "svelte";
  import { sample } from "lodash-es";
  import { availableSites } from "../store";

  let selectedLink = "";
  let errorMessage = false;

  const redirectToLink = (url) => {
    selectedLink = url;
    if (!url) {
      errorMessage = true;
    } else {
      window.location.replace(url);
    }
  };

  onMount(async () => {
    const randomLink = sample($availableSites);
    redirectToLink(randomLink);
  });
</script>

<h1>Redirecting to {selectedLink}...</h1>
{#if errorMessage}
  <h1>No links was provided</h1>
{/if}
