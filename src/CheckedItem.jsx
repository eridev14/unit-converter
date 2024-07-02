import { useState } from "react";

export const CheckedItem = ({ text }) => {
  const [check, setCheck] = useState(true);
  function hanldeClickItemCheck() {
    setCheck(!check);
  }

  return (
    <div className="checked__item" onClick={hanldeClickItemCheck}>
      <input type="checkbox" className="checked__check" checked={check} />
      <label className="checked__label">{text}</label>
    </div>
  );
};
