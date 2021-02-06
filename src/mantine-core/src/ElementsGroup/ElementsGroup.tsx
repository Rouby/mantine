import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles, { ElementsGroupPosition, ElementsGroupSpacing } from './ElementsGroup.styles';

interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  position?: ElementsGroupPosition;
  noWrap?: boolean;
  grow?: boolean;
  spacing?: ElementsGroupSpacing;
}

export default function ElementsGroup({
  className,
  position = 'left',
  children,
  noWrap = false,
  grow = false,
  spacing = 'md',
  themeOverride,
  ...others
}: ElementsGroupProps) {
  const classes = useStyles({
    grow,
    noWrap,
    spacing,
    position,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <div className={cx(classes.elementsGroup, className)} {...others}>
      {children}
    </div>
  );
}

ElementsGroup.displayName = '@mantine/core/ElementsGroup';