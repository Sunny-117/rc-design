import { Progress } from '@rc-design/core';
import React from 'react';
const Circle_Base = () => {
  return (
    <div
      style={{
        width: '600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Progress percent={30} type="circle" />
    </div>
  );
};

export default Circle_Base;
