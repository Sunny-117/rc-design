import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const getChildren = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <span>{children}</span>;
  }
  return children;
};

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dashed'
  | 'link'
  | 'text';

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;

type AnchorButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  type,
  htmlType,
  size,
  disabled,
  block,
  className,
  href,
  children,
  ...restProps
}) => {
  const classes = classNames('l-btn', className, {
    [`l-btn-${type}`]: type,
    [`l-btn-${size}`]: size,
    'l-btn-block': block,
  });

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  const childToRender = getChildren(children);

  return (
    <button
      type={htmlType ?? 'submit'}
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {childToRender}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'md',
  block: false,
  htmlType: 'button' as ButtonProps['htmlType'],
};

export default Button;
