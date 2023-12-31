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
    contrastText: "#fff",
  },
  secondary: {
    light: "#9c1c20",
    main: "#db2027",
    dark: "#db2027",
    contrastText: "#000",
  },
  success: {
    light: "#fffff",
    main: "#8bc34a",
    dark: "#3e7b00",
    contrastText: "#fff",
  },
  warning: {
    light: "#CFBC0B",
    main: "#CFBC0B",
    dark: "#CFBC0B",
    contrastText: "#333333",
  },
  error: {
    light: "#8A112F",
    main: "#8A112F",
    dark: "#8A112F",
    contrastText: "#fff",
  },
  info: {
    light: "#18C0CB",
    main: "#18C0CB",
    dark: "#18C0CB",
    contrastText: "#fff",
  },
};
