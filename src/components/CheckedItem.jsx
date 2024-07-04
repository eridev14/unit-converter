import { useRef } from "react";

export const CheckedItem = ({
  name,
  check,
  convertArray,
  setConvertArray,
  filterConvert,
}) => {
  const labelRef = useRef();

  function handleCheck() {
    let labelText = labelRef.current.textContent;
    let newConvert = convertArray.map((item) => ({
      ...item,
      check: item.name === labelText,
    }));

    setConvertArray(newConvert);
  }

  const handleClick = () => {
    handleCheck();
    filterConvert();
  };

  return (
    <div className="checked__item" onClick={handleClick}>
      <input
        type="checkbox"
        className="checked__check"
        checked={check}
        readOnly
      />
      <label ref={labelRef} className="checked__label">
        {name}
      </label>
    </div>
  );
};
