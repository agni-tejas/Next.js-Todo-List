import { ToastContainer } from "react-toastify";
import TodoLogic from "@/app/_components/TodoLogic";
import { Button } from "./_ui/Button";

export default function Home() {
  return (
    <div
      className={
        " md:pt-[3rem] pt-10 md:pb-[2rem] pb-7 pl-2  md:px-[7rem] shadow-[0.05em_0.1em_0.9em_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))] border-[0.05em] border-solid border-[#a2a2a250] mx-auto grid md:gap-8 gap-6 rounded-[20px] md:max-h-[40rem] max-h-[70rem] w-[23rem] md:w-[54rem]"
      }
    >
      <header>
        <ToastContainer position="top-right" autoClose={3000} />
        <h1 className="md:text-5xl text-[44px] md:text-left text-center pr-4 font-semibold mb-1 text-headColor">
          Daily To Do List
        </h1>
      </header>
      <TodoLogic />
    </div>
  );
}
