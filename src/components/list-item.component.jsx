import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ value, remove, move, group, moveVis, groupVis }) => {
  const moveVar = (
    <span className="column">
      <button
        type="button"
        className="button is-primary"
        onClick={() => move()}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </span>
  );
  const removeVar = (
    <span className="column">
      <button type="button" className="button" onClick={() => remove()}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </span>
  );
  const groupVar = (
    <span className="column">
      <button type="button" className="button" onClick={() => group()}>
        <FontAwesomeIcon icon={faObjectGroup} />
      </button>
    </span>
  );

  return (
    <li>
      <div className="container columns is-mobile">
        <span className="column is-two-thirds">{value}</span>
        <div className="column"></div>
        <span className="column columns is-mobile">
          {moveVis && moveVar} {groupVis && groupVar}{" "}
          {typeof remove == "function" && removeVar}
        </span>
      </div>
    </li>
  );
};

export default ListItem;
