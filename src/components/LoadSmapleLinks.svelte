<script>
  import { availableSites } from "../store";

  const loadLinks = () => {
    $availableSites = [
      "https://www.google.com/",
      "https://www.imdb.com/",
      "https://en.wikipedia.org/wiki/Main_Page",
    ];
    console.log($availableSites);
  };
</script>

<button class="button" type="button" on:click={loadLinks}>
  Load sample links
</button>
