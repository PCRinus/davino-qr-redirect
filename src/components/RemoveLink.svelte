<script>
  import { availableSites } from "../store";
  import { remove } from "lodash-es";
  import { doc, deleteDoc } from "firebase/firestore";
  import { db } from "../firebaseConfig";

  export let currentLink;
  export let currentID;

  const removeLink = async () => {
    console.log(currentID);
    await deleteDoc(doc(db, "current_links", currentID));
    $availableSites = remove($availableSites, function (n) {
      return n.url !== currentLink;
    });
    console.log($availableSites);
  };
</script>

<button type="button" on:click={removeLink}>
  <slot />
</button>
