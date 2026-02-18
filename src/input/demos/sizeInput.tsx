import { Input } from '@rc-design/core';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="small size" size="small"></Input>
      <br />
      <Input placeholder="default size"></Input>
      <br />
      <Input placeholder="large size" size="large"></Input>
    </>
  );
};
export default App;
