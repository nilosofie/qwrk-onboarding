import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import ListItem from "./list-item.component";

const List = ({ listObject, listLabel = "label1" }) => {
  /*listObject Rules
 {
    arr: [],
    addToArray: () => {},
    removeFromArray: () => {},
    moveItem: () => {},
    groupItem: () => {},
    moveVis: false,
    groupVis: false,
  }
  */
  const {
    arr,
    addToArray,
    removeFromArray,
    moveItem,
    groupItem,
    moveVis,
    groupVis,
  } = listObject;

  const [inputState, setInputState] = useState("");

  const mainArr = arr.map(({ id, item }) => {
    return (
      <ListItem
        id={id}
        key={id}
        value={item}
        remove={() => removeFromArray(id)}
        move={() => moveItem({ id, item })}
        group={() => groupItem()}
        moveVis={moveVis}
        groupVis={groupVis}
      />
    );
  });

  const textHandler = (event) => setInputState(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    addToArray(inputState);
    setInputState("");
  };

  return (
    <div className="list container block">
      <label className="subtitle">{listLabel}</label>
      <div className="container box block mobile-full-width-padding">
        <ul>{mainArr}</ul>
        <form
          className="new-item-container columns is-vcentered notification list-form is-mobile mobile-full-width-margin"
          onSubmit={submitHandler}
        >
          <span className="column">
            <input
              type="text"
              className="input is-normal"
              value={inputState}
              onChange={textHandler}
            />
          </span>
          <span className="column is-narrow">
            <button type="submit" className="button is-primary is-responsive">
              {" "}
              <FontAwesomeIcon icon={faPlus} />{" "}
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default List;
