import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BtnConvertion = () => {
  return (
    <button className="btn btn--convertions active">
      <FontAwesomeIcon
        icon="fa-solid fa-temperature-empty"
        className="btn__icon"
      />
      <span className="btn__text">Temperatura</span>
    </button>
  );
};
