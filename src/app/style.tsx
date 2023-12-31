import { Maven_Pro } from "next/font/google";

const maven = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const ParietteFont = {
  typography: {
    fontSize: 15,
    fontFamily: maven.style.fontFamily,
  },
};

export const ParietteColor = {
  primary: {
    light: "#DEDAD0",
    main: "#DEDAD0",
    dark: "#DEDAD0",
    contrastText: "#000000",
  },
  secondary: {
    light: "#db2027",
    main: "#db2027",
    dark: "#db2027",
    contrastText: "#ffffff",
  },
  success: {
    light: "#8bc34a",
    main: "#8bc34a",
    dark: "#8bc34a",
    contrastText: "#ffffff",
  },
  warning: {
    light: "#CFBC0B",
    main: "#CFBC0B",
    dark: "#CFBC0B",
    contrastText: "#000000",
  },
  error: {
    light: "#8A112F",
    main: "#8A112F",
    dark: "#8A112F",
    contrastText: "#ffffff",
  },
  info: {
    light: "#18C0CB",
    main: "#18C0CB",
    dark: "#18C0CB",
    contrastText: "#ffffff",
  },
};
