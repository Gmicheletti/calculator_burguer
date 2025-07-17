import { useState } from "react";
import "./App.css";
import Calc from "./calc/Calc";
import ListPeople from "./list/ListGuests";
import Shopping from "./shopping/Shopping";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function App() {
  const [menu, setMenu] = useState("calc");

  function changeMenu(newMenu) {
    setMenu(newMenu);
  }

  return (
    <>
      <div id="app">
        <h1>CalcBurguer</h1>
        <div className="group_menu">
        <ButtonGroup  variant="contained" aria-label="Basic button group">
          <Button  onClick={() => changeMenu("calc")}>Calculadora</Button>
          <Button onClick={() => changeMenu("guests")}>Convidados</Button>
          <Button  onClick={() => changeMenu("shopping")}>Compras</Button>
        </ButtonGroup>
        </div>

        {menu === "calc" && <Calc />}
        {menu === "guests" && <ListPeople />}
        {menu === "shopping" && <Shopping />}
      </div>
    </>
  );
}
