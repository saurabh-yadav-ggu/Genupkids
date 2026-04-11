/**
 * Theme and Color Configuration
 */

export const COLORS = {
  primary: "#1A1A2E",
  light: "#F0F2FF",
  lightWarm: "#FFFBF0",
  border: "#F0F0F0",
  borderLight: "#E8EAFF",
  disabled: "#D0D0D0",
  gray: "#888",
  lightGray: "#AAA",
  darkGray: "#CCC",
  shadow: "rgba(0,0,0,0.13)",
};

export const PLAYER_COLORS = {
  0: {
    primary: "#E8324A",
    dark: "#A01F2F",
    light: "#FFEAED",
    lightBg: "#FFF5F6",
  },
  1: {
    primary: "#3B5BDB",
    dark: "#243693",
    light: "#EBF0FF",
    lightBg: "#F5F7FF",
  },
};

export const SPACING = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 32,
};

export const RADIUS = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  full: 50,
};

export const SHADOWS = {
  sm: (color) => `0 4px 0 ${color}`,
  md: (color) => `0 5px 0 ${color}`,
  lg: (color) => `0 6px 0 ${color}`,
  outline: (color) => `0 0 0 3px ${color}`,
  drop: `0 8px 40px ${COLORS.shadow}`,
};

export const TRANSITIONS = {
  fast: "0.07s",
  normal: "0.3s",
  slow: "0.55s",
};
