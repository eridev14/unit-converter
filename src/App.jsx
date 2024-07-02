import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "./App.css";
import { Header } from "./Header";
import { BtnConvertion } from "./BtnConvertion";
import { useState } from "react";

function App() {
  const [convert, setConvert] = useState("temperatura");
  return (
    <div className="content">
      <Header />
      <section className="convertions">
        <h2 className="convertions__title">Convertions: Temperatura</h2>
        <div className="convertions__grid">
          <BtnConvertion />
        </div>
      </section>
    </div>
  );
}

export default App;
