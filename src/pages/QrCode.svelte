<script>
  import { onMount } from "svelte";
  import QRCode from "qrcode";
  import { isEmpty } from "lodash-es";
  import { availableSites } from "../store";
  import AddLink from "../components/AddLink.svelte";
  import LoadSampleLinks from "../components/LoadSmapleLinks.svelte";
  import RemoveLink from "../components/RemoveLink.svelte";

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

<div>
  <LoadSampleLinks />
</div>

{#if !isEmpty($availableSites)}
  <h2>Available sites:</h2>
{:else}
  <h2>No sites are currently loaded.</h2>
{/if}
<h2>
  <ul>
    {#each $availableSites as site}
      <li>
        <a href={site}>{site}</a>
        <RemoveLink currentLink={site}>
          Remove {site}
        </RemoveLink>
      </li>
    {/each}
  </ul>
</h2>

<AddLink />
