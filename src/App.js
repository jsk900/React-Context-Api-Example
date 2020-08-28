import React, { Fragment } from 'react';
import Container from './Container';

import B from './B';

//Wrap all jsx within the App with the container so all components have access to
//the state and setState functions. Everything wrapped inside the Container are considered children.
const App = () => {
  return (
    <Fragment>
      <Container>
        <h1>My React App</h1>
        <B />
      </Container>
    </Fragment>
  );
};

export default App;
