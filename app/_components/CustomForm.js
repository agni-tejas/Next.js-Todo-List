"use client";
import { useState } from "react";
import { Button } from "../_ui/Button";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form className="flex gap-4 text-customSize" onSubmit={handleFormSubmit}>
      <div className="ml-2 md:ml-0 grow shrink basis-full relative grid gap-1">
        <input
          type="text"
          id="task"
          className="input w-[336px] md:w-[638px] p-2 pr-24 rounded-[0.5rem] outline-none h-14 bg-muted"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Add new list item"
        />
        <label
          htmlFor="task"
          className="label absolute top-1/2 pointer-events-none bg-[hsl(var(--muted))] text-[#b7bcc5] font-light text-[0.6em] tracking-[0.05em] mx-[0.45em] p-[0.1em_0.35em]"
        >
          Add new list item
        </label>
      </div>
      <div className="relative">
        <Button variant="primary" aria-label="Add Task" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};
export default CustomForm;
