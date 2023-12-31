"use client";
import {
  Switch,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React, { useState } from "react";
import ParietteButton from "./components/ParietteButton";
import { ParietteColor, ParietteFont } from "./style";

export default function Home() {
  const [deneme, setDeneme] = useState({
    name: "",
    age: "",
  });
  const [themeSwitch, setThemeSwitch] = useState(false);
  const colors = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
  ];
  const [buttonColor, setButtonColor] = useState(colors[0]);

  const [theme, setTheme] = useState(
    createTheme(
      responsiveFontSizes(
        React.useMemo(
          () =>
            createTheme({
              ...ParietteFont,
              palette: {
                ...ParietteColor,
                mode: themeSwitch ? "dark" : "light",
              },
            }),
          [themeSwitch]
        )
      )
    )
  );

  class Test {
    name: string;
    age: string;

    constructor(name: string, age: string) {
      this.name = name;
      this.age = age;
    }

    alert() {
      alert("Adı: " + this.name + " | Age: " + this.age);
    }
    theme() {
      setButtonColor(colors.map((item) => item)[Math.floor(Math.random() * 6)]);
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDeneme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const test1 = new Test(deneme.name, deneme.age);
    //test1.alert();
    test1.theme();
  };

  const themeChange = () => {
    setThemeSwitch(!themeSwitch);
    setTheme(
      createTheme(
        responsiveFontSizes(
          createTheme({
            ...ParietteFont,
            palette: {
              ...ParietteColor,
              mode: !themeSwitch ? "dark" : "light",
            },
          })
        )
      )
    );
  };

  return (
    <main className={"mainPage"}>
      <ThemeProvider theme={theme}>
        <form onChange={handleChange}>
          <TextField name="name" value={deneme.name} label="name"></TextField>
          <TextField
            name="age"
            type="number"
            value={deneme.age}
            label="age"
          ></TextField>
          <ParietteButton
            variant="contained"
            onClick={handleClick}
            color={buttonColor}
            size="large"
            deneme="150px"
            disabled={deneme.name === ""}
          >
            deneme
          </ParietteButton>
        </form>
        <Typography className="text-center">
          {deneme.age + " " + deneme.name}
        </Typography>
        <Switch checked={themeSwitch} onChange={themeChange}></Switch>
      </ThemeProvider>
    </main>
  );
}
