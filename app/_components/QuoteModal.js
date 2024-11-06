"use client";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import { Button } from "../_ui/Button";
import { FaQuoteLeft } from "react-icons/fa";

const url = "https://dummyjson.com/quotes/random";

const QuoteModal = ({ isOpen, onClose }) => {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  useEffect(() => {
    if (isOpen) {
      setQuote("");

      getQuote();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] px-[2vmax] grid place-items-center bg-[hsl(var(--bg)/0.7)]">
      <div className="flex flex-col text-[20px] w-[20rem] md:w-[25rem] p-[1.3em] bg-[hsl(var(--bg))] rounded-[1.8rem] border border-[hsl(var(--accent)/0.3)] shadow-[0_-1em_3em_hsl(var(--muted)),_0_1em_3em_hsl(var(--accent)/0.2)]">
        <div className="ml-[90%]">
          <Button variant="update" onClick={onClose}>
            <AiOutlineClose size={20} />
          </Button>
        </div>

        <h2 className="text-headColor text-3xl font-bold mb-4">
          <FaQuoteLeft className="mr-2" />
        </h2>
        <p className="text-textColor">{quote}</p>
      </div>
    </div>
  );
};

export default QuoteModal;
