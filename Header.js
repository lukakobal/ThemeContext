import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return <h1>Current theme: {theme}</h1>;
}
