<script>
  import { onMount } from "svelte";
  import { sample } from "lodash-es";
  import { availableSites } from "../store";

  const errorMessage = false;

  const redirectToLink = (url) => {
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

<h1>Redirection...</h1>
{#if errorMessage}
  <h1>No links was provided</h1>
{/if}
