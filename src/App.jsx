import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";

import "./App.css";

function App() {
  const [numberBuguers, setNumberBuguers] = useState(0);
  const [weightBuguers, setweightBuguers] = useState(0);

  const [weightFraudinha, setWeightFraudinha] = useState(0);
  const [weightPatinho, setWeightPatinho] = useState(0);
  const [weightCapa, setWeightCapa] = useState(0);

  // const [priceFraudinha, setPriceFraudinha] = useState(0);
  // const [pricePatinho, setPricePatinho] = useState(0);
  // const [priceCapa, setPriceCapa] = useState(0);

  useEffect(() => {
    setWeightFraudinha((weightBuguers * numberBuguers * 0.3).toFixed(0));
    setWeightPatinho((weightBuguers * numberBuguers * 0.3).toFixed(0));
    setWeightCapa((weightBuguers * numberBuguers * 0.4).toFixed(0));
  }, [numberBuguers, weightBuguers]);

  return (
    <>
      <h1>Calculadora Hamburguer</h1>
      <div
        id="calculator"
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="filled-basic"
          label="Quantidade de Hamburgueres"
          variant="filled"
          value={numberBuguers}
          type="number"
          onChange={(e) => setNumberBuguers(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: "#1f1f1f", // cor de fundo do campo inteiro
            m: 1,
            width: "100%",
          }}
          InputProps={{
            sx: {
              color: "#fff", // cor do texto digitado
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#1976d2", // cor do label flutuante
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
              color: "#1976d2", // cor do label
            }}
          >
            Tamanho do Hamburguer
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={weightBuguers}
            label="Tamanho do Hambúrguer"
            onChange={(e) => setweightBuguers(e.target.value)}
            sx={{
              color: "#fff", // texto selecionado
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
          <h4>Fraudinha</h4>

          <Chip
            label={`${weightFraudinha} g`}
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              width: "20%",
            }}
          />
          {/* <TextField
            id="filled-basic"
            label="Valor Kg"
            variant="filled"
            value={priceFraudinha}
            type="number"
            onChange={(e) => setPriceFraudinha(e.target.value)}
            sx={{
              backgroundColor: "#1f1f1f", // cor de fundo do campo inteiro
              m: 1,
            width: "100%"
            }}
            InputProps={{
              sx: {
                color: "#fff", // cor do texto digitado
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#1976d2", // cor do label flutuante
              },
            }}
          /> */}
        </div>

        <div className="meat_info">
          <h4>Patinho</h4>

          <Chip
            label={`${weightPatinho} g`}
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              width: "20%",
            }}
          />
          {/* <TextField
            id="filled-basic"
            label="Valor Kg"
            variant="filled"
            type="number"
            value={pricePatinho}
            onChange={(e) => setPricePatinho(e.target.value)}
            sx={{
              backgroundColor: "#1f1f1f", // cor de fundo do campo inteiro
              m: 1,
            width: "100%"
            }}
            InputProps={{
              sx: {
                color: "#fff", // cor do texto digitado
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#1976d2", // cor do label flutuante
              },
            }}
          /> */}
        </div>

        <div className="meat_info">
          <h4>Capa de Filé</h4>
          <Chip
            label={`${weightCapa} g`}
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              width: "20%",
            }}
          />
          {/* <TextField
            id="filled-basic"
            label="Valor Kg"
            variant="filled"
            value={priceCapa}
            type="number"
            onChange={(e) => setPriceCapa(e.target.value)}
            sx={{
              backgroundColor: "#1f1f1f", // cor de fundo do campo inteiro
              m: 1,
            width: "100%"
            }}
            InputProps={{
              sx: {
                color: "#fff", // cor do texto digitado
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#1976d2", // cor do label flutuante
              },
            }}
          /> */}
        </div>
      </div>
    </>
  );
}

export default App;
