import { useState, useEffect } from "react";

import "./ListPeople.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListPeople() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const stored = localStorage.getItem("peopleList");

  function addPerson(name) {
    if (!name.trim()) return; // evita nomes vazios
    setPeople([...people, name]);
    setName("");
  }

  function removePerson(index) {
    const newList = [...people];
    newList.splice(index, 1);
    setPeople(newList);
  }

  useEffect(() => {
    try {
      if (stored) {
        const parsed = JSON.parse(stored);
        setPeople(parsed);
      }
    } catch (error) {
      console.error("Erro ao ler localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("peopleList", JSON.stringify(people));
  }, [people]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h3>Lista de Pessoas</h3>

          <List dense={true}>
            {people.map((item, index) => (
              <ListItem key={index}>
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
        </Grid>
      </Grid>
    </>
  );
}
