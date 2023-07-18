import React, { useContext } from "react";

import { OrgTreeContext } from "../context/org-tree.context";

import WizBody from "../components/wiz-body.component";
import List from "../components/list.component";

const Step1 = () => {
  const { actionList, addToActionList, removeFromActionList } =
    useContext(OrgTreeContext);

  const actionListObj = {
    arr: actionList,
    addToArray: addToActionList,
    removeFromArray: removeFromActionList,
  };

  return (
    <div>
      <WizBody
        step="1"
        subtitle="Actions"
        video="https://www.youtube.com/watch?v=xNRJwmlRBNU"
      />
      <List
        listObject={actionListObj}
        listLabel="What needs to happen in your business?"
      />
    </div>
  );
};

export default Step1;
