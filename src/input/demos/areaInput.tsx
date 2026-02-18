import { Input } from '@rc-design/core';
import React, { Fragment } from 'react';

const { TextArea } = Input;
const App = () => {
  return (
    <Fragment>
      <TextArea placeholder="maxLength" maxLength={6}></TextArea>
    </Fragment>
  );
};

export default App;
