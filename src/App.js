import './App.css'; // Import de style globaux
import Header from "./Header/Header";

function App() {
  const texte = "Premières petites manip";
  const containerClassName = "App"
  return (
    <div className={containerClassName}>
      <Header></Header>
      <h2>Hello CDA 2021</h2>
      <p>{texte.toUpperCase()}</p>
    </div>
  );
}

export default App;
