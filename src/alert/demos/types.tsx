import { Alert } from '@rc-design/core';
import React from 'react';

export default () => (
  <div>
    <Alert
      description="简单警示"
      type="primary"
      closable
      onClose={() => alert('closed!!')}
    ></Alert>
    <Alert description="成功警示" type="success" closable></Alert>
    <Alert description="信息警示" type="info" closable></Alert>
    <Alert description="警告警示" type="warning" closable></Alert>
    <Alert
      description="危险危险危险危险！！！！"
      type="danger"
      closable
    ></Alert>
  </div>
);
