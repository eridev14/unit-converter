import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <h1 className="title">Unit Converter</h1>
          <button className="nav__btn">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </nav>
        <div className="convert">
          <div className="convert__from">
            <label htmlFor="txtFrom" className="convert__label">
              Celsius
            </label>
            <input
              type="number"
              name="txtFrom"
              id="txtFrom"
              className="convert__input"
            />
            <section className="checked">
              <div className="checked__item">
                <input type="checkbox" className="checked__check" />
                <label className="checked__label">Celsuis</label>
              </div>
            </section>
          </div>
          <div className="convert__to">
            <label htmlFor="txtFrom" className="convert__label">
              Celsius
            </label>
            <input
              type="number"
              name="txtFrom"
              id="txtFrom"
              className="convert__input"
            />
            <section className="checked">
              <div className="checked__item">
                <input type="checkbox" className="checked__check" />
                <label className="checked__label">Celsuis</label>
              </div>
            </section>
          </div>
        </div>
      </header>

      <section className="convertions">
        <h2 className="convertions__title">Convertions</h2>
        <div className="convertions__grid">
          <button className="convertions__btn">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="convertions__icon"
            />
            <span className="convertions__btn-text">Temp</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
