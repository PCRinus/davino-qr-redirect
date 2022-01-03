<script>
  import { availableSites } from "../store";
  import { remove } from "lodash-es";

  export let currentLink;

  const removeLink = () => {
    console.log(currentLink);
    $availableSites = remove($availableSites, function (n) {
      return n !== currentLink;
    });
    console.log($availableSites);
  };
</script>

<button type="button" on:click={removeLink}>
  <slot />
</button>
