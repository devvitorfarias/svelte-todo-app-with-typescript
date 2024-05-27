<script lang="ts">
  import type { Todo } from "$lib";
  import CloseSvg from "$lib/assets/CloseSvg.svelte";
  import CheckBox from "./CheckBox.svelte";

  export let todo: Todo, onEdit, onToggle, onDelete;
</script>

<div
  class="flex items-center gap-2 py-2 pl-2 pr-4 rounded-md group w-96 bg-slate-800"
>
  <input
    type="text"
    value={todo.task}
    data-value={todo.task}
    data-id={todo.id}
    tabindex="-1"
    onkeypress={onEdit}
    class="flex-1 py-2 pl-2 bg-transparent rounded-md text-slate-50 outline-transparent"
  />
  <button
    data-id={todo.id}
    onclick={onDelete}
    class="text-2xl text-red-600 rounded-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 bg-slate-200"
  >
    <CloseSvg class="pointer-events-none" />
  </button>
  <CheckBox id={todo.id} checked={todo.done} {onToggle} />
</div>
