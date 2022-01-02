<script>
  import { onMount } from "svelte";
  import { sample } from "lodash-es";
  import { availableSites } from "../store";

  const randomLink = sample($availableSites);

  const redirectToLink = (url) => {
    window.location.replace(url);
  };

  onMount(async () => {
    redirectToLink(randomLink);
  });
</script>

<h1>Redirection...</h1>
