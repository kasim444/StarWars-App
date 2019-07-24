/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const DetailHeader = (props) => {
  return (
    <div className="img-header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="1379"
        height="543"
        id="blurred_8adpiygor"
        className="ie-blur"
        viewBox="0 0 1379 543"
        preserveAspectRatio="none"
      >
        <filter id="blur_8adpiygor">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
        </filter>
        <image
          x="0"
          y="0"
          width="1379"
          height="543"
          externalResourcesRequired="true"
          xlinkHref={props.imgLink}
          style={{filter:'url(#blur_8adpiygor)'}}
          preserveAspectRatio="none"
        />
      </svg>
    </div>
  )
}

export default DetailHeader;
