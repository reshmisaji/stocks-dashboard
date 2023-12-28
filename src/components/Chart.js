import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Chart.css";

export const Chart = () => {
  return (
    <div className="chart-container">
      <FontAwesomeIcon icon={faPlus} className="add-icon" />
    </div>
  );
};
