import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

/**
 * Phone dimensions, actual size in px
 */
export const sizes = {
  width,
  height,
};

export const defaultSpacingUnit = 16;

export const colors = {
  background: "#FFFEF5",

  primary: {
    main: "#FA4D19",
    light: "#F7F1E5",
  },
  secondary: {
    main: "#5F0CFA",
    light: "#EFE6FE",
  },
  tertiary: {
    main: "#19FABE",
    light: "#EAF8F4",
  },

  light: "#FFFFFF",
  dim: "#838383",
  dark: "#030B30",
};

export const fontSizes = {
  smallest: 12,
  smaller: 13,
  small: 14,
  medium: 15,
  large: 16,
  larger: 18,
  largest: 20,
  huge: 24,
  heading: 26,
};

export const fontWeights = {
  bold: "500",
  bolder: "600",
  boldest: "800",
};

export const screenGeneralStyle = {
  backgroundColor: colors.background,
  flex: 1,
};
