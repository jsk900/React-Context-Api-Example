import React, { Fragment, useContext } from 'react';
import { Context } from './Context';

const C = () => {
  //This statement grabs all the states and functions from the context.
  const data = useContext(Context);

  return (
    <Fragment>
      <h1>I am component C</h1>
      <p>This is x value {data.x}</p>
      <p>This my y value {data.y}</p>
      <button onClick={() => data.setX(data.x + 1)}>Increment x</button>
      <button onClick={() => data.setY(data.y + 1)}>Increment y</button>
    </Fragment>
  );
};

export default C;
