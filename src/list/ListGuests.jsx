import { useState, useEffect } from "react";

import "./ListGuests.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListGuests() {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState("");
  const stored = localStorage.getItem("peopleList");

  function addPerson(name) {
    if (!name.trim()) return; // evita nomes vazios
    setGuests([...guests, name]);
    setName("");
  }

  function removePerson(index) {
    const newList = [...guests];
    newList.splice(index, 1);
    setGuests(newList);
  }

  useEffect(() => {
    try {
      if (stored) {
        const parsed = JSON.parse(stored);
        setGuests(parsed);
      }
    } catch (error) {
      console.error("Erro ao ler localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("peopleList", JSON.stringify(guests));
  }, [guests]);

  return (
    <>
      <div id="listGuests">
        <h4>Total de Convidados: {guests.length}</h4>
        <Grid spacing={2}>
          <Grid item xs={12} md={6}>
            <div id="controlPlusPeople">
              <TextField
                label="Nome do convidado"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{
                  backgroundColor: "#1f1f1f",
                  m: 1,
                  width: "60%",
                }}
                InputProps={{
                  sx: {
                    color: "#fff",
                    paddingTop: "5px",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#fff",
                    textAlign: "center",
                  },
                }}
              />
              <Button variant="contained" onClick={() => addPerson(name)}>
                Adicionar
              </Button>
            </div>
            <List dense={true}>
              {guests.map((item, index) => (
                <ListItem className="item_list" key={index}>
                  <ListItemText primary={item} />
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={() => removePerson(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
