import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CheckedItem } from "./CheckedItem";

const convertItemsArrayTo = [
  { id: 1, name: "Celsius", check: true },
  { id: 2, name: "Fahrenheit", check: false },
  { id: 3, name: "Kelvin", check: false },
];
const convertItemsArrayFrom = [
  { id: 1, name: "Celsius", check: true },
  { id: 2, name: "Fahrenheit", check: false },
  { id: 3, name: "Kelvin", check: false },
];

export const Header = () => {
  const [down, setDown] = useState(true);
  const [valueFrom, setValueFrom] = useState(1);
  const [value, setValue] = useState({ from: "Celsius", to: "Celsius" });

  const [convertArrayFrom, setConvertArrayFrom] = useState(
    convertItemsArrayFrom
  );
  const [convertArrayTo, setConvertArrayTo] = useState(convertItemsArrayTo);

  function handleClickDownUp() {
    setDown(!down);
  }

  function handleChangeInput(e) {
    let number = e.target.value;
    setValueFrom(number);
  }

  function filterConvert() {
    let from = convertArrayFrom.filter((item) => item.check === true);
    let to = convertArrayTo.filter((item) => item.check === true);
    const newCon = {
      from: from[0].name,
      to: to[0].name,
    };
    setValue(newCon);
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
        <div
          className={down ? "convert" : "convert active"}
          style={
            !down
              ? {
                  height: `calc(80px + (${convertArrayFrom.length} * 28px))`,
                }
              : null
          }
        >
          <div className="convert__side convert__side--from">
            <label htmlFor="txtFrom" className="convert__label">
              Celsius
            </label>
            <input
              type="number"
              name="txtFrom"
              id="txtFrom"
              className="convert__input"
              value={valueFrom}
              onChange={handleChangeInput}
            />
            <section className="checked">
              {convertArrayFrom.map(({ id, name, check }) => (
                <CheckedItem
                  key={id}
                  name={name}
                  check={check}
                  filterConvert={filterConvert}
                  convertArray={convertArrayFrom}
                  setConvertArray={setConvertArrayFrom}
                />
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
              readOnly
            />
            <section className="checked">
              {convertArrayTo.map(({ id, name, check }) => (
                <CheckedItem
                  key={id}
                  name={name}
                  check={check}
                  filterConvert={filterConvert}
                  convertArray={convertArrayTo}
                  setConvertArray={setConvertArrayTo}
                />
              ))}
            </section>
          </div>
          <span className="convert__equal">=</span>
        </div>
        <button
          className="btn btn--up"
          onClick={handleClickDownUp}
          style={
            !down
              ? {
                  top: `calc(195px + (${convertArrayFrom.length} * 28px))`,
                }
              : null
          }
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </header>
    </>
  );
};
