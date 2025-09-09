'use client'

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function toggleTheme() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeTheme = () => {
    if (!document.startViewTransition) switchTheme();
    document.startViewTransition(switchTheme);
  };

  return (
    <Button
      onClick={() => {
        changeTheme();
      }}
      className="cursor-pointer"
      variant="outline"
    >
        {theme === "dark" ? <Sun/> : <Moon/>}
    </Button>
  );
}
