<script>
  import { availableSites } from "../store";

  let newLink = "";

  const addLink = (link) => {
    $availableSites = [...$availableSites, link];
  };
</script>

<form on:submit|preventDefault={() => addLink(newLink)}>
  <label for="addLink">Add a new link</label>

  <input type="text" name="addLink" bind:value={newLink} />

  <button type="submit">Add link</button>
</form>
