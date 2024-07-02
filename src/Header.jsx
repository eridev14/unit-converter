import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CheckedItem } from "./CheckedItem";

const convertItemTextArray = ["Celsius", "Fahrenheit", "Kelvin"];

export const Header = () => {
  const [down, setDown] = useState(true);
  const [valueFrom, setValueFrom] = useState(1);
  function handleClickDownUp() {
    setDown(!down);
  }

  function handleChangeInput(e) {
    let number = e.target.value;
    console.log(number);
    if (!number) return;
    setValueFrom(number);
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <h1 className="title">Unit Converter</h1>
          <button className="btn btn--nav">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </nav>
        <div className={down ? "convert" : "convert active"}>
          <div className="convert__side convert__side--from">
            <label htmlFor="txtFrom" className="convert__label">
              Celsius
            </label>
            <input
              type="number"
              name="txtFrom"
              id="txtFrom"
              className="convert__input"
              onChange={handleChangeInput}
            />
            <section className="checked">
              {convertItemTextArray.map((text, id) => (
                <CheckedItem key={id} text={text} />
              ))}
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
              value={valueFrom}
            />
            <section className="checked">
              {convertItemTextArray.map((text, id) => (
                <CheckedItem key={id} text={text} />
              ))}
            </section>
          </div>
          <span className="convert__equal">=</span>
        </div>
        <button className="btn btn--up" onClick={handleClickDownUp}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </header>
    </>
  );
};
