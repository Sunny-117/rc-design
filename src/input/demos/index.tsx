import { Input } from 'rc-design';
import React from 'react';

export default () => {
  const changeHandle = () => {
    console.log('changeHandle');
  };
  return (
    <>
      <Input placeholder="Sunny-117" onChange={changeHandle}></Input>
    </>
  );
};
