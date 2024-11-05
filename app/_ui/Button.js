import { cva } from "class-variance-authority";
import { cn } from "@/app/_lib/utils";

const buttonVariants = cva("flex items-center transition", {
  variants: {
    variant: {
      important: `w-8 h-8 text-base rounded-full flex place-items-center p-2 no-underline gap-[0.5em] bg-[hsl(var(--accent))] text-[hsl(var(--bg))] shadow-[0.05em_0.1em_0.9em_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))] transition-[box-shadow_background-color] duration-fast ease-squish hover:shadow-[0_0_0_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]`,
      update: `w-8 h-8 text-base rounded-full flex place-items-center p-2 no-underline gap-[0.5em] bg-[hsl(var(--accent))] text-[hsl(var(--bg))] shadow-[0.05em_0.1em_0.9em_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))] transition-[box-shadow_background-color] duration-fast ease-squish hover:bg-[hsl(var(--accent)_/_0.7)] hover:shadow-[0_0_0_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]`,
      delete: `w-8 h-8 text-base rounded-full flex place-items-center p-2 no-underline gap-[0.5em] bg-[hsl(var(--accent1))] text-[hsl(var(--bg))] shadow-[0.05em_0.1em_0.9em_hsl(var(--accent1)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent1))] transition-[box-shadow_background-color] duration-fast ease-squish hover:bg-[hsl(var(--accent1)_/_0.7)] hover:shadow-[0_0_0_hsl(var(--accent1)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]`,
      primary: `
          absolute right-6 top-[0.4rem] h-3/4 text-[1.2rem] tracking-wider p-5
          bg-[hsl(var(--accent))] text-[hsl(var(--bg))] rounded-md
          shadow-[0.05em_0.1em_0.9em_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]
          hover:bg-[hsl(var(--accent)_/_0.7)]
        `,
      primary2: `
           h-3/4 text-[1.2rem] tracking-wider p-5
          bg-[hsl(var(--accent))] text-[hsl(var(--bg))] rounded-md
          shadow-[0.05em_0.1em_0.9em_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]
          hover:bg-[hsl(var(--accent)_/_0.7)] hover:shadow-[0_0_0_hsl(var(--accent)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]
        `,
      clear: `
           h-8 tracking-wider
          bg-[hsl(var(--accent1))] text-[hsl(var(--bg))] rounded-md
          shadow-[0.05em_0.1em_0.9em_hsl(var(--accent1)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent1))]
          hover:bg-[hsl(var(--accent1)_/_0.7)] hover:shadow-[0_0_0_hsl(var(--accent1)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent1))]
        `,
    },
    size: {
      default: "px-5 py-5",
      sm: "px-2 py-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Button({ className, size, variant, children, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
