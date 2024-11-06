"use client";

import { useState, useEffect } from "react";

import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "../_ui/Button";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  const [date, time, period] = editedTask.createdAt.split(" ");
  return (
    <div
      className="fixed inset-0 z-[100] px-[2vmax] grid place-items-center bg-[hsl(var(--bg)/0.7)]"
      aria-label="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form
        className="flex flex-col text-[20px] w-[20rem] md:w-[25rem] p-[1.3em] bg-[hsl(var(--bg))] rounded-[1.8rem] border border-[hsl(var(--accent)/0.3)] shadow-[0_-1em_3em_hsl(var(--muted)),_0_1em_3em_hsl(var(--accent)/0.2)]"
        onSubmit={handleFormSubmit}
      >
        <p className="text-left text-sm">Created at: {date}</p>
        <p className="text-left text-sm mb-6">Time: {`${time} ${period}`}</p>
        <div className="grow shrink basis-full relative grid gap-1">
          <input
            type="text"
            id="editTask"
            className="input md:max-w-full p-2 pr-10 rounded-[0.5rem] outline-none h-14 max-w-[16.5rem]  bg-muted"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label
            htmlFor="editTask"
            className="label absolute top-1/2 pointer-events-none bg-[hsl(var(--muted))] text-[#b7bcc5] font-light text-[0.8em] tracking-[0.05em] mx-[0.45em] p-[0.1em_0.35em]"
          >
            Update Task
          </label>
        </div>
        <div className="ml-[40%]">
          <Button
            variant="primary2"
            size="sm"
            className="mt-6 w-2xl place-content-center "
            aria-label={`Confirm edited task to now read ${updatedTaskName}`}
            type="submit"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditForm;
