<script>
  import { db } from "../firebaseConfig";
  import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
  import { availableSites } from "../store";

  const resetCurrentLinks = () => {
    $availableSites = [];
    deleteFirestoreCurrentLinks();
  };

  const deleteFirestoreCurrentLinks = async () => {
    const query_snapshot = await getDocs(collection(db, "current_links"));
    console.log(query_snapshot);
    query_snapshot.forEach(async (docs) => {
      console.log(docs.data());
      await deleteDoc(doc(db, "current_links", docs.data().id));
    });
  };
</script>

<button type="button" on:click={resetCurrentLinks}>
  Reset Current Links
</button>
