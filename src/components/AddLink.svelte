<script>
  import { availableSites } from "../store";
  import { collection, addDoc } from "firebase/firestore";
  import { db } from "../firebaseConfig";

  let newLink = "";
  $: disabled = newLink === "" ? "disabled" : "";

  const addLink = async (link) => {
    const docRef = await addDoc(collection(db, "current_links"), {
      url: newLink,
    });
    console.log(`Document written with ID: ${docRef.id}`);
    $availableSites = [...$availableSites, { url: newLink, id: docRef.id }];
    newLink = "";
  };
</script>

<form on:submit|preventDefault={() => addLink(newLink)}>
  <label for="addLink">Add a new link</label>

  <input type="text" name="addLink" bind:value={newLink} />

  <button type="submit" {disabled}>Add link</button>
</form>
