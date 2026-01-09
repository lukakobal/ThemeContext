🌗 React 56 – Context API (Theme Example)

A small React app demonstrating Context API usage for sharing state across multiple components without props drilling.

🎯 Project Goal

Understand why and when to use Context API

Share global state between unrelated components

Use createContext, useContext, and Provider

Follow a clean, real-world project structure

🧠 Key Concepts

Context API

Global state

useContext

Provider & children

React render cycle on state change

📁 Project Structure
src/
├── App.js
├── ThemeContext.js
├── Header.js
├── Content.js
├── styles.css
└── index.js

⚙️ How It Works

ThemeContext.js holds the global state (theme)

ThemeProvider wraps the entire app

Header reads the state from Context

Content updates the state from Context

When the state changes, all components consuming the Context re-render automatically

🔁 Application Flow

User clicks Toggle theme

toggleTheme updates the Context state

React triggers a re-render

Header receives the updated theme without props

🚀 Why Context API

Eliminates props drilling

Provides a single source of truth

Improves scalability and readability in larger applications



https://codesandbox.io/p/sandbox/jyqk58?file=%2Fsrc%2FThemeContext.js%3A1%2C1-18%2C1
