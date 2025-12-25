import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header
        title="React Component Architecture (Header)"
        subtitle="Reusable, configurable, and state-driven components"
      />

      <Card
        title="Why This Card Is Reusable (Card)"
        footer="(Footer for Card 😏)"
      >
        <p>This card accepts dynamic content using children.</p>
        <Button
          text="Learn More (Button)"
          variant="primary"
          onClick={() => alert("This is some more info.....! 😏")}
        />
      </Card>

      <Card title="User Input Example (Form)">
        <Form />
      </Card>

      <Footer />
    </div>
  );
}

export default App;
