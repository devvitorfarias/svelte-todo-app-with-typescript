<script lang="ts">
  import type { Todo, Filter } from "$lib/index"
  import TodoItem from "$lib/components/TodoItem.svelte";
  import AddTodoInput from "$lib/components/AddTodoInput.svelte";
  import Container from "$lib/components/Container.svelte";

  let todos: Todo[] = $state([]);

  let filter: Filter = $state("all");

  let filteredTodos = $derived(getFilteredTodos());

  let isLoading: boolean = $state(true);

  $effect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")!) as Todo[] | null;

    if(storedTodos) {
      todos = storedTodos;
      isLoading = false;
    }
  })

  $effect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    isLoading = false;
  })

  function addTodo(event: KeyboardEvent): void {
    if (event.key !== "Enter") return;

    const inputEl = event.target as HTMLInputElement;

    if(!inputEl.value) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      task: inputEl.value,
      done: false,
    };

    todos.push(newTodo);

    inputEl.value = "";
  }

  function toggleTodo(event: Event) {
    const inputEl = event.target as HTMLElement;
    const id = +inputEl.dataset.id!;

    todos.forEach(todo => {
      if(todo.id !== id) return todo;
      todo.done = !todo.done
    });
  }

  function editTodo(event: KeyboardEvent) {
    const inputEl = event.target as HTMLInputElement;
    const id = +inputEl.dataset.id!;

    if(event.key === "Enter") {
      inputEl.blur();

      if(!inputEl.value) {
        inputEl.value = inputEl.dataset.value as string;
      }
    }

    todos.forEach(todo => {
      if(todo.id !== id) return todo;
      todo.task = inputEl.value;
    });
  }

  function deleteTodo(event: Event) {
    const button = event.target as HTMLButtonElement;
    const id = +button.dataset.id!;

    todos = todos.filter(todo => todo.id !== id);
  }

  function setFilter(newFilter: Filter): void {
    filter = newFilter;
  }

  function getFilteredTodos(): Todo[] {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.done);
      case "completed":
        return todos.filter((todo) => todo.done);
    }
  }
  
  function getRemaining(): number {
    return todos.filter(todo => !todo.done).length;
  }

  function getMessage(): string {
    if(isLoading) {
      return "Loading your todos..."
    }

    if(!todos.length) {
      return "No Todos were found";
    }

    if (!filteredTodos.length) {
      switch (filter) {
        case "all":
        return "No Todos were found";
      case "active":
        return "All tasks were completed";
      case "completed":
        return "Time to do some tasks";
      }
    }

    return "";
  }
</script>
<Container>
  <AddTodoInput onAdd={addTodo} />
  
  <div class="grid gap-2 p-1 rounded-lg shadow-lg bg-slate-900">
    {#if filteredTodos.length === 0}

      <p class="py-3 text-xl text-center text-slate-50">{getMessage()}</p>

    {:else}

      {#each filteredTodos as todo, index (index)}
        <TodoItem {todo} onEdit={editTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
      {/each}
      
    {/if}
  </div>

  <div class="grid grid-cols-3 gap-4 p-2 rounded-lg bg-slate-900">
    {#each ["all", "active", "completed"] as item}
      <button
        onclick={() => setFilter(item as Filter)}
        class={`text-orange-50 px-4 py-2 rounded-md ${filter === item ? "bg-orange-500" : ""}`}
      >
        {item}
      </button>
    {/each}
  </div>

  <p class="pl-2 text-slate-50">remaining {getRemaining()}/{todos.length}</p>
</Container>