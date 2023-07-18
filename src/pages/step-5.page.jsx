import React, { useContext } from "react";

import WizBody from "../components/wiz-body.component";

import { OrgTreeContext } from "../context/org-tree.context";

import { infrastrucBucket } from "../data/tree-root.data";

const Step5 = () => {
  const { pushToBucket, validateBucketId } = useContext(OrgTreeContext);

  if (!validateBucketId(infrastrucBucket.id)) {
    pushToBucket(infrastrucBucket);
  }
  return (
    <div>
      <WizBody step="5" subtitle="Infrastructure" video="Step 5 video" />
    </div>
  );
};

export default Step5;
