"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterSortControls from "@/app/_components/FilterSortControls";
import TaskActions from "@/app/_components/TaskActions";
import ThemeSwitcher from "@/app/_components/ThemeSwitcher";
import QuoteModal from "@/app/_components/QuoteModal";
import useLocalStorage from "@/app/_hooks/useLocalStorage";
import EditForm from "./EditForm";
import CustomForm from "./CustomForm";
import TaskList from "./TaskList";
import { FaQuoteLeft } from "react-icons/fa";
import ReactConfetti from "react-confetti";
import { Button } from "../_ui/Button";
import createdAt from "../_lib/createdAt";

export default function Home() {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);

  const addTask = (task) => {
    const newTask = {
      ...task,
      createdAt: createdAt(),
    };
    setTasks((prevState) => [...prevState, newTask]);
    toast.success("Task added!", {
      theme: "color-scheme",
      style: {
        color: "#57b3ff",
      },
    });
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
    toast.info("Task deleted.", {
      theme: "color-scheme",
      style: {
        color: "#57b3ff",
      },
    });
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
    toast.info("Task updated.", {
      theme: "color-scheme",
      style: {
        color: "#57b3ff",
      },
    });
  };

  const toggleImportant = (id) => {
    setTasks((prevState) =>
      prevState.map((t) =>
        t.id === id ? { ...t, important: !t.important } : t
      )
    );
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.checked;
    if (filter === "active") return !task.checked;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.important !== b.important) {
      return b.important ? 1 : -1;
    }

    if (sort === "alphabetical") {
      return a.name.localeCompare(b.name);
    }
    if (sort === "date") {
      return b.createdAt - a.createdAt;
    }
    if (sort === "status") {
      return a.checked - b.checked;
    }
    return 0;
  });

  const selectedCount = tasks.filter((task) => task.checked).length;

  const clearSelectedTasks = () => {
    setTasks((prevState) => prevState.filter((task) => !task.checked));
    toast.warning("Selected tasks cleared.", {
      theme: "color-scheme",
      style: {
        color: "#57b3ff",
      },
    });
  };

  const clearAllTasks = () => {
    setTasks([]);
    toast.error("All tasks cleared.", {
      theme: "color-scheme",
      style: {
        color: "#57b3ff",
      },
    });
  };

  const toggleQuoteModal = () => {
    setIsQuoteOpen(!isQuoteOpen);
  };

  useEffect(() => {
    const checkAllCompleted =
      tasks.length > 0 && tasks.every((task) => task.checked);
    setAllCompleted(checkAllCompleted);
  }, [tasks]);

  useEffect(() => {
    if (allCompleted) {
      toast.success("🎉 All tasks completed", {
        theme: "color-scheme",
        style: {
          color: "#57b3ff",
        },
      });
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [allCompleted]);

  return (
    <>
      {showConfetti && <ReactConfetti />}

      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}

      <CustomForm addTask={addTask} />

      {tasks.length > 0 && (
        <FilterSortControls
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
      )}

      {tasks && (
        <TaskList
          tasks={sortedTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
          toggleImportant={toggleImportant}
        />
      )}

      {tasks.length > 0 && (
        <TaskActions
          selectedCount={selectedCount}
          filteredTasks={filteredTasks}
          clearSelectedTasks={clearSelectedTasks}
          clearAllTasks={clearAllTasks}
        />
      )}

      {tasks.length === 0 && (
        <div className="flex mt-14 justify-center">
          <Button variant="primary2" onClick={toggleQuoteModal}>
            <FaQuoteLeft className="mr-2" /> Get Inspired
          </Button>
        </div>
      )}

      <QuoteModal isOpen={isQuoteOpen} onClose={toggleQuoteModal} />

      <ThemeSwitcher tasks={sortedTasks} onClick={toggleQuoteModal} />
    </>
  );
}
