/**
 * Theme and Color Configuration
 */

export const COLORS = {
  primary: "#006093", // website primary
  light: "#f5f7f8", // website surface
  lightWarm: "#FFD54F", // website secondary-container
  border: "#e5e9ea", // website surface-container
  borderLight: "#dfe3e4", // website surface-container-high
  disabled: "#d0d5d7", // website surface-dim
  gray: "#595c5d", // website on-surface-variant
  lightGray: "#747778", // website outline
  darkGray: "#2c2f30", // website on-surface
  shadow: "rgba(0,0,0,0.1)",
};

export const PLAYER_COLORS = {
  0: {
    primary: "#006093", // primary
    dark: "#005480", // primary-dim
    light: "#69bdff", // primary-container
    lightBg: "#ebf4ff", // on-primary
  },
  1: {
    primary: "#9f345d", // tertiary
    dark: "#8f2751", // tertiary-dim
    light: "#ff8db2", // tertiary-container
    lightBg: "#ffeff1", // on-tertiary
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
