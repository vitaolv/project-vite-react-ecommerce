import { Skeleton } from "antd";

import { useState } from "react";

import PropTypes from "prop-types";

export function SkeletonImageComponent({
  productImage,
  productName,
  className,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && <Skeleton.Image active />}
      <img
        src={productImage}
        alt={productName}
        className={className}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
    </div>
  );
}

SkeletonImageComponent.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  className: PropTypes.string,
};
