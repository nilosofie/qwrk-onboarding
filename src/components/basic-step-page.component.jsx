import React, { useContext } from "react";

import WizBody from "../components/wiz-body.component";
import List from "./list.component";

import { OrgTreeContext } from "../context/org-tree.context";
import { WizStepCountContext } from "../context/wiz-step-count.context";

// import { leadGenBucket } from "../data/tree-root.data"; //send from page
import { nanoid } from "nanoid";

//localBucket
//title

const BasicStepPage = ({ localBucket, title, video }) => {
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

  const { wizStepCount } = useContext(WizStepCountContext);

  //local vars

  const localListCopy = localList(localBucket.id);

  const localListMap = localListCopy[0]
    ? localListCopy.map(({ name, id }) => ({ id: id, item: name }))
    : [];

  //validate Step Bucket and push

  if (!validateBucketId(localBucket.id)) {
    pushToBucket(localBucket);
  }

  //Functions

  const moveActionToBucket = ({ id, item }) => {
    const actionObj = {
      parentId: localBucket.id,
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
      parentId: localBucket.id,
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

  const actionListObject = {
    arr: actionList,
    addToArray: addToActionList,
    removeFromArray: removeFromActionList,
    moveItemToSub: moveActionToBucket,
    removeFromArrayVis: true,
    moveItemToSubVis: true,
  };

  const BucketListObject = {
    arr: localListMap,
    addToArray: addActionToBucket, //Add Item
    removeFromArray: () => {}, //Delete
    sendItemToMain: moveFromBucketList, // Move Item from sub array to main array
    addItemToChild: () => {}, // Move Item from main array to sub array child
    addToArrayVis: true,
    removeFromArrayVis: true,
    sendItemToMainVis: true,
  };

  //return

  return (
    <div>
      <WizBody step={wizStepCount} subtitle={title} video={video} />
      <div className="container columns">
        <div className="column">
          <List
            listLabel="What needs to happen in your business?"
            listObject={actionListObject}
          />
        </div>
        <div className="column">
          <List listLabel={`${title}: `} listObject={BucketListObject} />
        </div>
      </div>
    </div>
  );
};

export default BasicStepPage;
