import React, { useContext } from "react";

import { OrgTreeContext } from "../context/org-tree.context";

import { leadConBucket } from "../data/tree-root.data";

import WizBody from "../components/wiz-body.component";

const Step3 = () => {
  const { pushToBucket, validateBucketId } = useContext(OrgTreeContext);

  if (!validateBucketId(leadConBucket.id)) {
    pushToBucket(leadConBucket);
  }

  return (
    <div>
      <WizBody step="3" subtitle="Lead Conversion" video="Step 3 video" />
    </div>
  );
};

export default Step3;
