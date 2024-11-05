"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TbClockExclamation } from "react-icons/tb";
import { Button } from "../_ui/Button";

const TaskItem = ({
  task,
  deleteTask,
  toggleTask,
  enterEditMode,
  toggleImportant,
}) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  return (
    <li className="flex items-center justify-between gap-[0.5em] text-[1.8rem] border-b-[0.5px] border-[#a2a2a250] p-[0.6em] h-[3.2rem]">
      <div className="flex items-center gap-[0.5em]">
        <input
          type="checkbox"
          className="checkbox flex-shrink-0 appearance-none rounded-full w-7 h-7 bg-[hsl(var(--muted))] focus:outline-none"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={`relative cursor-pointer text-left leading-[1.4] ${
            isChecked ? "text-gray-500 line-through" : ""
          }`}
        >
          <p
            className={`text-[1.2rem] ml-[0.2rem] ${
              task.important ? "text-red-400" : ""
            } ${!isChecked ? "hover:text-[#2585fa]" : ""}`}
          >
            {task.name}
          </p>
          <p className="checkmark absolute w-7 h-7 transition-bg grid place-items-center top-1/2 text-muted rounded-[1.8rem]">
            <CheckIcon strokeWidth={2} width={20} height={20} />
          </p>
        </label>
      </div>
      <div className="flex items-center gap-[0.5em]">
        <Button
          variant="important"
          className={`${
            task.important && !isChecked
              ? "animated-pulse"
              : "hover:bg-[hsl(var(--accent)_/_0.7)]"
          } `}
          aria-label={`Mark ${task.name} as Important`}
          onClick={() => toggleImportant(task.id)}
        >
          <TbClockExclamation className="w-4 h-4" />
        </Button>

        <Button
          variant="update"
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={20} height={20} />
        </Button>

        <Button
          variant="delete"
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </Button>
      </div>
    </li>
  );
};
export default TaskItem;
