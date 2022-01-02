<script>
  import { onMount } from "svelte";
  import QRCode from "qrcode";

  const generateQR = async (text) => {
    try {
      await QRCode.toCanvas(document.getElementById("canvas"), text);
    } catch (err) {
      console.error(err);
    }
  };

  onMount(async () => {
    generateQR("localhost:5000#/redirect");
  });
</script>

<canvas id="canvas" />
