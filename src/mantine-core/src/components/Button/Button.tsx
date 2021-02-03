/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme, Size } from '@mantine/types';
import useStyles from './Button.styles';

interface ButtonProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: Size;
  type?: 'submit' | 'button' | 'reset';
  color?: OpenColorTheme;
}

const Button = forwardRef(
  (
    {
      className,
      size = 'md',
      color,
      type = 'button',
      disabled = false,
      children,
      ...others
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ color, size });
    return (
      <button
        {...others}
        className={cx(classes.button, className)}
        type={type}
        disabled={disabled}
        data-composable
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = '@mantine/core/Button';

export default Button;