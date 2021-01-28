import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '@mantine/types';
import { CheckIcon } from '@modulz/radix-icons';
import classes from './Checkbox.styles.less';

interface CheckboxProps
  extends DefaultProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'value' | 'onChange'> {
  value: boolean;
  onChange(value: boolean): void;
  label: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

const Checkbox = forwardRef(
  (
    { className, value, onChange, label, disabled, id, ...others }: CheckboxProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const uuid = useId(id);

    return (
      <div className={cx(classes.wrapper, className)} {...others}>
        <button
          ref={ref}
          disabled={disabled}
          className={cx(classes.checkbox, { [classes.checked]: value })}
          type="button"
          role="checkbox"
          onClick={() => onChange(!value)}
          aria-checked={value}
          id={uuid}
        >
          {value && <CheckIcon />}
        </button>

        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = '@mantine/core/Checkbox';

export default Checkbox;