import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";

import "./Calc.css";

export default function Calc() {
  const [numberBurguers, setNumberBurguers] = useState(0);
  const [weightBurguers, setweightBurguers] = useState(0);
  const stored_numberBurguers = localStorage.getItem("numberBurguers");
  const stored_weightBurguers = localStorage.getItem("weightBurguers");

  const [weightFraldinha, setWeightFraldinha] = useState(0);
  const [weightPatinho, setWeightPatinho] = useState(0);
  const [weightCapa, setWeightCapa] = useState(0);


  useEffect(() => {
      try {
        if (stored_numberBurguers && stored_weightBurguers) {
          const stored_number = JSON.parse(stored_numberBurguers);
          setNumberBurguers(stored_number);

          const stored_weight = JSON.parse(stored_weightBurguers);
          setweightBurguers(stored_weight);
        }
      } catch (error) {
        console.error("Erro ao ler localStorage:", error);
      }
    }, []);

  useEffect(() => {
    setWeightFraldinha((weightBurguers * numberBurguers * 0.3).toFixed(0));
    setWeightPatinho((weightBurguers * numberBurguers * 0.3).toFixed(0));
    setWeightCapa((weightBurguers * numberBurguers * 0.4).toFixed(0));
    localStorage.setItem("numberBurguers", JSON.stringify(numberBurguers));
    localStorage.setItem("weightBurguers", JSON.stringify(weightBurguers));
  }, [numberBurguers, weightBurguers]);

  return (
    <>
      <div id="calculator">
        <TextField
          id="filled-basic"
          label="Quantidade de Burguers"
          variant="filled"
          value={numberBurguers}
          type="number"
          onChange={(e) => setNumberBurguers(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: "#1f1f1f", // cor de fundo do campo inteiro
            m: 1,
            width: "100%",
          }}
          InputProps={{
            sx: {
              color: "#fff", // cor do texto digitado
              height: "70px", // altura do campo
              paddingTop: "5px", // para centralizar o texto verticalmente
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#fff", // cor do label flutuante
              textAlign: "center", // centraliza o texto do label
            },
          }}
        />
        <FormControl
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: "#1f1f1f", // fundo do select
            m: 1,
            width: "100%",
          }}
        >
          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              color: "#fff", // cor do label
            }}
          >
            Tamanho do Burguer
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={weightBurguers}
            label="Tamanho do Hambúrguer"
            onChange={(e) => setweightBurguers(e.target.value)}
            sx={{
              color: "#fff", // texto selecionado
              height: "70px", // altura do campo
              paddingTop: "5px", // para centralizar o texto verticalmente
            }}
            // Para mudar cor do ícone (setinha do select)
            IconComponentProps={{
              style: { color: "#fff" },
            }}
          >
            <MenuItem value={130}>130g</MenuItem>
            <MenuItem value={150}>150g</MenuItem>
            <MenuItem value={180}>180g</MenuItem>
            <MenuItem value={200}>200g</MenuItem>
          </Select>
        </FormControl>

        <div className="meat_info">
          <h4>Fraldinha</h4>

          <Chip
            label={`${weightFraldinha} g`}
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              width: "200px",
            }}
          />
        </div>

        <div className="meat_info">
          <h4>Patinho</h4>

          <Chip
            label={`${weightPatinho} g`}
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              width: "200px",
            }}
          />
        </div>

        <div className="meat_info">
          <h4>Capa de Filé</h4>
          <Chip
            label={`${weightCapa} g`}
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              width: "200px",
            }}
          />
        </div>
      </div>
    </>
  );
}
