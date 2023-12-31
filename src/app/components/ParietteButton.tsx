import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface ParietteButtonProps extends ButtonProps {
  //Extra props tanımlamak için kullanılır.
  deneme?: string;
}

const ParietteButton: React.FC<ParietteButtonProps> = ({ ...p }) => {
  console.log(p);
  return (
    <Button
      {...p}
      size={p.size ?? "small"}
      sx={{
        ...p.sx,
        width: p.deneme ?? "100px", //Default değer atamaları yapılabilir.
        ":hover": {
          backgroundColor: "#B4AD9C",
          //transition: "2s",
        },
        ":disabled": {
          backgroundColor: "#54514A",
        },
      }}
    >
      {p.children}
    </Button>
  );
};

export default ParietteButton;
