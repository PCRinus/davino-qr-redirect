<script>
  import { availableSites } from "../store";
  import { collection, getDocs, addDoc } from "firebase/firestore";
  import { db } from "../firebaseConfig";

  const loadLinks = async () => {
    const querySnapshot = await getDocs(collection(db, "sample_links"));
    querySnapshot.forEach((doc) => {
      populateCurrentLinks(doc);
    });
  };

  const populateCurrentLinks = async (doc) => {
    const docRef = await addDoc(collection(db, "current_links"), {
      url: doc.data().url,
    });
    console.log(docRef.url);
    $availableSites = [
      ...$availableSites,
      { url: doc.data().url, id: docRef.id },
    ];
    console.log(`Document written with ID: ${docRef.id}`);
  };
</script>

<button class="button" type="button" on:click={loadLinks}>
  Load sample links
</button>
