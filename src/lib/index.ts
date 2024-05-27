// place files you want to import through the `$lib` alias in this folder.
export type Todo = {
  id: number;
  task: string;
  done: boolean;
};

export type Filter = "all" | "active" | "completed";
