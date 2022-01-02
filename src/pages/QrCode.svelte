<script>
  import { onMount } from "svelte";
  import QRCode from "qrcode";
  import { availableSites } from "../store";
  import AddLink from "../components/AddLink.svelte";

  const generateQR = async (text) => {
    try {
      await QRCode.toCanvas(document.getElementById("canvas"), text);
    } catch (err) {
      console.error(err);
    }
  };

  onMount(async () => {
    generateQR(window.location.href + "#/redirect");
  });
</script>

<canvas id="canvas" />

<h2>Available sites:</h2>
<h2>
  <ul>
    {#each $availableSites as site}
      <li>
        <a href={site}>{site}</a>
      </li>
    {/each}
  </ul>
</h2>

<AddLink />
