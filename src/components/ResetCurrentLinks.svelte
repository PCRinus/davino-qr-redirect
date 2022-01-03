<script>
  import { db } from "../firebaseConfig";
  import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
  import { availableSites } from "../store";

  $: disabled = $availableSites.length === 0 ? "disabled" : "";

  const resetCurrentLinks = () => {
    $availableSites = [];
    deleteFirestoreCurrentLinks();
  };

  const deleteFirestoreCurrentLinks = async () => {
    const query_snapshot = await getDocs(collection(db, "current_links"));
    query_snapshot.forEach(async (docs) => {
      await deleteDoc(doc(db, "current_links", docs.id));
    });
  };
</script>

<button type="button" on:click={resetCurrentLinks} {disabled}>
  Reset Current Links
</button>
