import { memo } from "react";

const ChildComponent = ({ number }) => {

    console.log('render child');

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};


export default memo(ChildComponent)
