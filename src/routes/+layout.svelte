<script>
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="flex flex-col justify-start gap-4 min-h-svh bg-slate-950">
  <Header />
  <slot />
  <div class="mt-auto">
    <Footer />
  </div>
</div>
