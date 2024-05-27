<script>
  import GithubSvg from "./../assets/GithubSvg.svelte";
  import TypescriptSvg from "$lib/assets/TypescriptSvg.svelte";
  import TailwindcssSvg from "$lib/assets/TailwindcssSvg.svelte";
  import SvelteSvg from "$lib/assets/SvelteSvg.svelte";
</script>

<footer
  class="flex items-center justify-between gap-2 py-4 mx-auto max-sm:px-4 w-96 text-slate-50"
>
  <div>
    <a
      href="https://github.com/SamirAhmad5445/svelte-todo-app-with-typescript"
      class="flex items-center justify-start gap-2 transition-colors hover:text-orange-600"
    >
      <GithubSvg />
      <span>Visit Repo</span>
    </a>
  </div>

  <div class="flex items-center justify-start gap-2">
    <p>Build with</p>
    <div class="flex items-center justify-center gap-3">
      <SvelteSvg />
      <TypescriptSvg />
      <TailwindcssSvg />
    </div>
  </div>
</footer>
