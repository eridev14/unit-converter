import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGear,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  return (
    <div className="content">
      <header className="header">
        <nav className="nav">
          <h1 className="title">Unit Converter</h1>
          <button className="btn btn--nav">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </nav>
        <div className="convert ">
          <div className="convert__side convert__side--from">
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
              <div className="checked__item">
                <input type="checkbox" className="checked__check" />
                <label className="checked__label">Celsuis</label>
              </div>
            </section>
          </div>
          <div className="convert__side convert__side--to">
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
              <div className="checked__item">
                <input type="checkbox" className="checked__check" />
                <label className="checked__label">Celsuis</label>
              </div>
            </section>
          </div>
          <span className="convert__equal">=</span>
          <button className="btn btn--up">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </header>

      <section className="convertions">
        <h2 className="convertions__title">Convertions</h2>
        <div className="convertions__grid">
          <button className="btn btn--convertions">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="btn__icon"
            />
            <span className="btn__text">Temp</span>
          </button>
          <button className="btn btn--convertions">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="btn__icon"
            />
            <span className="btn__text">Temp</span>
          </button>
          <button className="btn btn--convertions">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="btn__icon"
            />
            <span className="btn__text">Temp</span>
          </button>
          <button className="btn btn--convertions">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="btn__icon"
            />
            <span className="btn__text">Temp</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
