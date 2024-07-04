import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "./App.css";
import { useState } from "react";
import { BtnConvertion } from "./components/BtnConvertion";
import { Header } from "./components/Header";

function App() {
  const [unit, setUnit] = useState("temperatura");
  return (
    <div className="content">
      <Header />
      <section className="convertions">
        <h2 className="convertions__title">Convertions: {unit}</h2>
        <div className="convertions__grid">
          <BtnConvertion />
        </div>
      </section>
    </div>
  );
}

export default App;
