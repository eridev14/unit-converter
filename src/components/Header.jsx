import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
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

const conversionMap = {
  Celsius: {
    Fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
    Kelvin: (celsius) => celsius + 273.15,
    Celsius: (celsius) => celsius,
  },
  Fahrenheit: {
    Celsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
    Kelvin: (fahrenheit) => ((fahrenheit + 459.67) * 5) / 9,
    Fahrenheit: (fahrenheit) => fahrenheit,
  },
  Kelvin: {
    Celsius: (kelvin) => kelvin - 273.15,
    Fahrenheit: (kelvin) => (kelvin * 9) / 5 - 459.67,
    Kelvin: (kelvin) => kelvin,
  },
};

export const Header = () => {
  const [down, setDown] = useState(true);
  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(0);
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
    let conv = convertUnit(number, value.from, value.to);
    console.log(conv);
    setValueTo(conv);
  }

  function convertUnit(value, fromUnit, toUnit) {
    if (value < 1) return 0;
    if (fromUnit === toUnit) {
      return value;
    }

    const converter = conversionMap[fromUnit]?.[toUnit];
    if (!converter) {
      throw new Error(`Conversión de ${fromUnit} a ${toUnit} no soportada.`);
    }

    return converter(value);
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

  useEffect(() => {
    filterConvert();
  }, [convertArrayFrom, convertArrayTo]);

  useEffect(() => {
    let conv = convertUnit(valueFrom, value.from, value.to);
    setValueTo(conv);
  }, [value, convertArrayFrom, convertArrayTo]);

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
              {value.from}
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
                  convertArray={convertArrayFrom}
                  setConvertArray={setConvertArrayFrom}
                />
              ))}
            </section>
          </div>
          <div className="convert__side convert__side--to">
            <label htmlFor="txtFrom" className="convert__label">
              {value.to}
            </label>
            <input
              type="number"
              name="txtFrom"
              id="txtFrom"
              className="convert__input"
              value={valueTo}
              readOnly
            />
            <section className="checked">
              {convertArrayTo.map(({ id, name, check }) => (
                <CheckedItem
                  key={id}
                  name={name}
                  check={check}
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
