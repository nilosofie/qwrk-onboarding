import React, { useContext } from "react";

import WizBody from "../components/wiz-body.component";
import List from "../components/list.component";

import { OrgTreeContext } from "../context/org-tree.context";

import { leadGenBucket } from "../data/tree-root.data";

const Step2 = () => {
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

  const localListCopy = localList(leadGenBucket.id);

  const localListMap = localListCopy[0]
    ? localListCopy.map(({ name, id }) => ({ id: id, item: name }))
    : [];

  //validate Step Bucket and push

  if (!validateBucketId(leadGenBucket.id)) {
    pushToBucket(leadGenBucket);
  }

  //Functions

  const moveActionToBucket = ({ id, item }) => {
    const actionObj = {
      parentId: leadGenBucket.id,
      id: id,
      name: item,
      title: item,
      children: [],
    };

    removeFromActionList(id);
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
    addToArray: () => {},
    removeFromArray: moveFromBucketList,
    moveItem: () => {},
    groupItem: () => {},
    moveVis: false,
    groupVis: false,
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
      <WizBody step="2" subtitle="Lead Generation" video="Step 2 video" />
      <div className="container columns">
        <div className="column">
          <List
            listLabel="What needs to happen in your business?"
            listObject={actionListObject}
          />
        </div>
        <div className="column">
          <List listLabel="Lead Generation:" listObject={bucketListObject} />
        </div>
      </div>
    </div>
  );
};

export default Step2;
