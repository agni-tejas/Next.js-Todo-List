"use client";
import { useState, useEffect } from "react";
import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

import useLocalStorage from "../_hooks/useLocalStorage";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../_ui/Button";
import { FaQuoteLeft } from "react-icons/fa";

const ThemeSwitcher = ({ onClick, tasks }) => {
  const [hue, setHue] = useLocalStorage("react-todo.color", "224");

  const [theme, setTheme] = useLocalStorage("react-todo.theme", "light");
  const [isColorPicking, setIsColorPicking] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (!theme) {
        setTheme(prefersDarkMode ? "dark" : "light");
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
    document.documentElement.style.setProperty("--_hue", hue);
  }, [theme, hue]);

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? "hsl(var(--muted) / .6)"
          : "transparent",
      }}
    >
      {isColorPicking ? (
        <>
          <Button
            variant="update"
            className={
              "absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
            aria-label="Close color picking mode"
            onClick={() => setIsColorPicking(false)}
          >
            <XMarkIcon />
          </Button>
          <input
            className={styles.picker}
            type="range"
            min="0"
            max="360"
            aria-label="Change color theme slider"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div className={styles.btn}>
          <Button
            variant="update"
            aria-label={`Change theme to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            role="switch"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>

          {tasks.length > 0 && (
            <Button variant="update" onClick={onClick}>
              <FaQuoteLeft />
            </Button>
          )}

          <Button
            variant="update"
            aria-label="Enable color picking mode"
            onClick={() => setIsColorPicking(true)}
          >
            <SwatchIcon />
          </Button>
        </div>
      )}
    </aside>
  );
};
export default ThemeSwitcher;
