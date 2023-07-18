import React, { useContext } from "react";

import WizBody from "../components/wiz-body.component";
import List from "../components/list.component";

import { OrgTreeContext } from "../context/org-tree.context";

import { leadConBucket } from "../data/tree-root.data";
import { nanoid } from "nanoid";

const Step3 = () => {
  //context
  const {
    pushToBucket,
    validateBucketId,
    actionList,
    addToActionList,
    removeFromActionList,
    localList,
    removeFromBucket,
  } = useContext(OrgTreeContext);

  //local vars

  const localListCopy = localList(leadConBucket.id);

  const localListMap = localListCopy[0]
    ? localListCopy.map(({ name, id }) => ({ id: id, item: name }))
    : [];

  //validate Step Bucket and push

  if (!validateBucketId(leadConBucket.id)) {
    pushToBucket(leadConBucket);
  }

  //Functions

  const moveActionToBucket = ({ id, item }) => {
    const actionObj = {
      parentId: leadConBucket.id,
      id: id,
      name: item,
      title: item,
      children: [],
    };

    removeFromActionList(id);
    pushToBucket(actionObj);
  };

  const addActionToBucket = (item) => {
    const actionObj = {
      parentId: leadConBucket.id,
      id: nanoid(),
      name: item,
      title: item,
      children: [],
    };

    pushToBucket(actionObj);
  };

  const moveFromBucketList = (id) => {
    const obj = localListCopy.filter((obj) => obj.id === id)[0];
    console.log(obj);
    addToActionList(obj.name, obj.id);
    removeFromBucket(obj.id);
  };

  //ListObjects

  const bucketListObject = {
    arr: localListMap,
    addToArray: addActionToBucket,
    removeFromArray: moveFromBucketList,
    moveItem: () => {},
    groupItem: () => {},
  };

  console.log("action");

  console.log(actionList);

  const actionListObject = {
    arr: actionList,
    addToArray: addToActionList,
    removeFromArray: removeFromActionList,
    moveItem: moveActionToBucket,
    moveVis: true,
  };

  //return

  return (
    <div>
      <WizBody
        step="3"
        subtitle="Lead Conversion"
        video="https://www.youtube.com/embed/q4E9L0Ic8Bw"
      />
      <div className="container columns">
        <div className="column">
          <List
            listLabel="What needs to happen in your business?"
            listObject={actionListObject}
          />
        </div>
        <div className="column">
          <List listLabel="Lead Conversion:" listObject={bucketListObject} />
        </div>
      </div>
    </div>
  );
};

export default Step3;
