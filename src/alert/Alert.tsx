import classNames from 'classnames';
import React, { FC, useState } from 'react';

export type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'danger';

interface BaseAlertProps {
  type?: AlertType;
  className?: string;
  description?: string;
  closable?: boolean;
  onClose?: (e: MouseEvent) => void;
}

const Alert: FC<BaseAlertProps> = ({
  className,
  type,
  description,
  closable,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  const myDelete = (e: any) => {
    onClose?.(e);
    setVisible(false);
  };

  const classes = classNames('alt-main', 'alert', className, {
    [`alt-${type}`]: type,
  });
  if (!visible) {
    return null;
  }
  return (
    <div className={classes}>
      <div className="quit" onClick={myDelete}>
        {closable && 'x'}
      </div>
      <div className="content">{description}</div>
    </div>
  );
};

Alert.defaultProps = {
  type: 'primary',
  description: '请输入内容',
  closable: false,
};

export default Alert;
