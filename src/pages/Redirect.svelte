<script>
  import { onMount } from "svelte";
  import { sample } from "lodash-es";
  import { availableSites } from "../store";
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../firebaseConfig";

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
    const snapshot = await getDocs(collection(db, "current_links"));
    snapshot.forEach((doc) => {
      $availableSites = [
        ...$availableSites,
        { url: doc.data().url, id: doc.id },
      ];
    });
    const randomLink = sample($availableSites).url;
    redirectToLink(randomLink);
  });
</script>

<h1>Redirecting to {selectedLink}...</h1>
{#if errorMessage}
  <h1>No links was provided</h1>
{/if}
