<script>
  import { onMount } from "svelte";
  import { sample } from "lodash-es";

  const avaliableLinks = [
    "https://www.google.com/",
    "https://www.youtube.com/",
    "https://developer.mozilla.org/en-US/",
  ];

  const randomLink = sample(avaliableLinks);

  const redirectToLink = (url) => {
    window.location.replace(url);
  };

  onMount(async () => {
    redirectToLink(randomLink);
  });
</script>

<h1>Redirection</h1>
