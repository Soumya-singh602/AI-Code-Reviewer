import CodeEditor from "./components/CodeEditor";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          AI Code Reviewer
        </div>

        <div className="navbar-right">
          AI Powered
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">

        {/* Hero Section */}
        <section className="hero-section">
          <h1>AI Code Reviewer</h1>

          <p>
            Review your code with AI and get detailed insights,
            bugs, improvements, and corrected code suggestions.
          </p>
        </section>

        {/* Code Review Editor */}
        <CodeEditor />

      </main>

    </div>
  );
}