import { ToastContainer } from "react-toastify";
import TodoLogic from "@/app/_components/TodoLogic";
import { Button } from "./_ui/Button";

export default function Home() {
  return (
    <div
      className={
        " pt-[3rem] pb-[2rem] px-[7rem] shadow-[0.05em_0.1em_0.9em_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))] border-[0.05em] border-solid border-[#a2a2a250] mx-auto grid gap-8 rounded-[20px] max-h-[80rem] w-[54rem]"
      }
    >
      <header>
        <ToastContainer position="top-right" autoClose={3000} />
        <h1 className="text-5xl font-semibold mb-1 text-headColor">
          Daily To Do List
        </h1>
      </header>
      <TodoLogic />
    </div>
  );
}
