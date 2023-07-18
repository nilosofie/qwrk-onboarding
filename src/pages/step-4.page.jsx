import React, { useContext } from "react";

import WizBody from "../components/wiz-body.component";

import { OrgTreeContext } from "../context/org-tree.context";

import { orderFulFillBucket } from "../data/tree-root.data";

const Step4 = () => {
  const { pushToBucket, validateBucketId } = useContext(OrgTreeContext);

  if (!validateBucketId(orderFulFillBucket.id)) {
    pushToBucket(orderFulFillBucket);
  }
  return (
    <div>
      <WizBody step="4" subtitle="Order Fulfillment" video="Step 4 video" />
    </div>
  );
};

export default Step4;
