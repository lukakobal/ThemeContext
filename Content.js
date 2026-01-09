import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle theme</button>;
}
