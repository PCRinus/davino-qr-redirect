<script>
  import Router from "svelte-spa-router";
  import QrCode from "./pages/QrCode.svelte";
  import Redirect from "./pages/Redirect.svelte";

  const routes = {
    "/": QrCode,
    "/redirect": Redirect,
  };
</script>

<Router {routes} />
