<script>
  import { onMount } from "svelte";
  import QRCode from "qrcode";
  import { isEmpty } from "lodash-es";
  import { availableSites } from "../store";
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../firebaseConfig";

  import AddLink from "../components/AddLink.svelte";
  import LoadSampleLinks from "../components/LoadSampleLinks.svelte";
  import RemoveLink from "../components/RemoveLink.svelte";
  import ResetCurrentLinks from "../components/ResetCurrentLinks.svelte";

  const generateQR = async (text) => {
    try {
      await QRCode.toCanvas(document.getElementById("canvas"), text, {
        errorCorrectionLevel: "H",
      });
    } catch (err) {
      console.error(err);
    }
  };

  onMount(async () => {
    generateQR(window.location.href + "#/redirect");
    const querySnapshot = await getDocs(collection(db, "current_links"));
    querySnapshot.forEach((doc) => {
      $availableSites = [
        ...$availableSites,
        { url: doc.data().url, id: doc.id },
      ];
    });
  });
</script>

<canvas id="canvas" />

<div>
  <LoadSampleLinks />
  <ResetCurrentLinks />
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
        <a href={site.url}>{site.url}</a>
        <RemoveLink currentLink={site.url} currentID={site.id}>
          Remove
        </RemoveLink>
      </li>
    {/each}
  </ul>
</h2>

<AddLink />
