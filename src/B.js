import React, { Fragment } from 'react';
import C from './C';

//Here C is a child of B, but no props are being passed down. As we will grab state from the context.
const B = () => {
  return (
    <Fragment>
      <h1>I am component B</h1>
      <C />
    </Fragment>
  );
};

export default B;
