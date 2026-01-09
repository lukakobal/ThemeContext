import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}
