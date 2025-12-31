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
  const [typeBlend, setTypeBlend] = useState("original");

  const stored_numberBurguers = localStorage.getItem("numberBurguers");
  const stored_weightBurguers = localStorage.getItem("weightBurguers");
  const stored_typeBlend = localStorage.getItem("typeBlend");

  const [weightB1Fraldinha, setWeightB1Fraldinha] = useState(0);
  const [weightB1Patinho, setWeightB1Patinho] = useState(0);
  const [weightB1Capa, setWeightB1Capa] = useState(0);

  const [weightB2Acem, setWeightB2Acem] = useState(0);
  const [weightB2Peito, setWeightB2Peito] = useState(0);
  const [weightB2Fraldinha, setWeightB2Fraldinha] = useState(0);

  const [weightB3Acem, setWeightB3Acem] = useState(0);
  const [weightB3Peito, setWeightB3Peito] = useState(0);
  const [weightB3Fraldinha, setWeightB3Fraldinha] = useState(0);

  useEffect(() => {
    try {
      if (stored_numberBurguers && stored_weightBurguers) {
        const stored_number = JSON.parse(stored_numberBurguers);
        setNumberBurguers(stored_number);

        const stored_weight = JSON.parse(stored_weightBurguers);
        setweightBurguers(stored_weight);

        const stored_type = JSON.parse(stored_typeBlend);
        setTypeBlend(stored_type);
      }
    } catch (error) {
      console.error("Erro ao ler localStorage:", error);
    }
  }, []);

  useEffect(() => {
    setWeightB1Fraldinha((weightBurguers * numberBurguers * 0.3).toFixed(0));
    setWeightB1Patinho((weightBurguers * numberBurguers * 0.3).toFixed(0));
    setWeightB1Capa((weightBurguers * numberBurguers * 0.4).toFixed(0));

    setWeightB2Acem((weightBurguers * numberBurguers * 0.5).toFixed(0));
    setWeightB2Peito((weightBurguers * numberBurguers * 0.3).toFixed(0));
    setWeightB2Fraldinha((weightBurguers * numberBurguers * 0.2).toFixed(0));

    setWeightB3Acem((weightBurguers * numberBurguers * 0.45).toFixed(0));
    setWeightB3Peito((weightBurguers * numberBurguers * 0.35).toFixed(0));
    setWeightB3Fraldinha((weightBurguers * numberBurguers * 0.2).toFixed(0));

    localStorage.setItem("numberBurguers", JSON.stringify(numberBurguers));
    localStorage.setItem("weightBurguers", JSON.stringify(weightBurguers));
    localStorage.setItem("typeBlend", JSON.stringify(typeBlend));

    
  }, [numberBurguers, weightBurguers, typeBlend]);

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
            Tipo do Blend
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={typeBlend}
            label="Tipo do Blend"
            onChange={(e) => setTypeBlend(e.target.value)}
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
            <MenuItem value={"original"}>Blend Original</MenuItem>
            <MenuItem value={"grelha"}>Blend Grelha</MenuItem>
            <MenuItem value={"smash"}>Blend Smash</MenuItem>
          </Select>
        </FormControl>

        {typeBlend === "original" ? (
          <>
            <div className="meat_info">
              <h4>Fraldinha</h4>

              <Chip
                label={`${weightB1Fraldinha} g`}
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
                label={`${weightB1Patinho} g`}
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
                label={`${weightB1Capa} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>
          </>
        ) : typeBlend === "grelha" ? (
          <>
            <div className="meat_info">
              <h4>Acém</h4>

              <Chip
                label={`${weightB2Acem} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>

            <div className="meat_info">
              <h4>Peito</h4>

              <Chip
                label={`${weightB2Peito} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>

            <div className="meat_info">
              <h4>Fraldinha</h4>
              <Chip
                label={`${weightB2Fraldinha} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>
          </>
        ) : typeBlend === "smash" ? (
          <>
            <div className="meat_info">
              <h4>Acém</h4>

              <Chip
                label={`${weightB3Acem} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>

            <div className="meat_info">
              <h4>Peito</h4>

              <Chip
                label={`${weightB3Peito} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>

            <div className="meat_info">
              <h4>Fraldinha</h4>
              <Chip
                label={`${weightB3Fraldinha} g`}
                color="primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  width: "200px",
                }}
              />
            </div>
          </>
        ) : (
          <div>Selecione o tipo do Blend</div>
        )}
      </div>
    </>
  );
}
