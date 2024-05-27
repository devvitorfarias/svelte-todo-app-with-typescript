<script lang="ts">
  export let onAdd;
</script>

<input
  type="text"
  placeholder="Press enter to add todo..."
  tabindex="0"
  onkeypress={onAdd}
  class="px-6 py-3 mx-auto rounded-md shadow-md w-96 bg-slate-200 text-slate-950 outline-orange-500"
/>
