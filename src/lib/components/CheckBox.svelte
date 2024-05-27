<script>
  import CheckedFillSvg from "$lib/assets/CheckedFillSvg.svelte";
  import CheckedSvg from "./../assets/CheckedSvg.svelte";
  export let id, checked, onToggle;
</script>

<div class="relative isolate group rounded-full has-[:checked]:bg-orange-50">
  <input
    type="checkbox"
    data-id={id}
    {checked}
    onchange={onToggle}
    class="absolute inset-0 scale-150 bg-transparent opacity-0 peer"
  />

  <CheckedSvg
    class="absolute inset-0 text-2xl scale-125 opacity-0 pointer-events-none text-orange-50 peer-checked:opacity-0 group-hover:opacity-100"
  />

  <CheckedFillSvg
    class="text-2xl text-orange-500 opacity-0 pointer-events-none peer-checked:opacity-100"
  />

  <div
    aria-hidden="true"
    class="absolute inset-0 border-2 rounded-full group-hover:opacity-0 -z-10 border-slate-50"
  ></div>
</div>
