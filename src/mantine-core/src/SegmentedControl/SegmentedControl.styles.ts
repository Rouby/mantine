import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  getFontStyles,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
  getFocusStyles,
} from '@mantine/theme';

interface SegmentedControlStyles {
  theme: MantineTheme;
  fullWidth: boolean;
  color: string;
  radius: MantineNumberSize;
  reduceMotion: boolean;
}

export default createUseStyles({
  controlActive: {},

  input: ({ theme }: SegmentedControlStyles) => ({
    height: 0,
    width: 0,
    position: 'absolute',
    overflow: 'hidden',
    whiteSpace: 'nowrap',

    '&:focus': {
      outline: 'none',

      '& + $label': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
        }, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
      },

      '&:focus:not(:focus-visible)': {
        '& + $label': {
          boxShadow: 'none',
        },
      },
    },
  }),

  wrapper: ({ theme, fullWidth, radius }: SegmentedControlStyles) => ({
    position: 'relative',
    display: fullWidth ? 'flex' : 'inline-flex',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    overflow: 'hidden',
    padding: 4,
  }),

  control: {
    position: 'relative',
    boxSizing: 'border-box',
    flex: 1,
    zIndex: 2,
  },

  label: ({ theme, radius, reduceMotion }: SegmentedControlStyles) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
    padding: [5, theme.spacing.md],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    transition: `color ${reduceMotion ? 0 : 200}ms ${theme.transitionTimingFunction}`,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
  }),

  labelActive: ({ theme, color }: SegmentedControlStyles) => ({
    '&, &:hover': {
      color: color in theme.colors || theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }),

  active: ({ theme, color, radius, reduceMotion }: SegmentedControlStyles) => ({
    boxSizing: 'border-box',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    position: 'absolute',
    top: 4,
    bottom: 4,
    zIndex: 1,
    boxShadow: color || theme.colorScheme === 'dark' ? 'none' : theme.shadows.xs,
    transition: `transform ${reduceMotion ? 0 : 200}ms ${theme.transitionTimingFunction}, width ${
      reduceMotion ? 0 : 200
    }ms ${theme.transitionTimingFunction}`,
    backgroundColor:
      color in theme.colors
        ? getThemeColor({ theme, color, shade: 6 })
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.white,
  }),
});