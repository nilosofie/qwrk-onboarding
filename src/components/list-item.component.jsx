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
        className="button is-dark is-outlined is-responsive"
        onClick={() => move()}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </span>
  );
  const removeVar = (
    <span className="column">
      <button
        type="button"
        className="button is-link is-outlined is-responsive"
        onClick={() => remove()}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </span>
  );
  const groupVar = (
    <span className="column">
      <button
        type="button"
        className="button is-dark is-outlined is-responsive"
        onClick={() => group()}
      >
        <FontAwesomeIcon icon={faObjectGroup} />
      </button>
    </span>
  );

  return (
    <li className="block">
      <div className="container columns is-vcentered is-mobile">
        <span className="column">{value}</span>
        <span className="column is-narrow">
          <div className="columns is-mobile is-variable is-1">
            {moveVis && moveVar} {groupVis && groupVar}{" "}
            {typeof remove == "function" && removeVar}
          </div>
        </span>
      </div>
    </li>
  );
};

export default ListItem;
