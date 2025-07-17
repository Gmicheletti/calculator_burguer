import { useState, useEffect } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Shopping.css";

export default function Shopping() {
  const [listItem, setListItem] = useState([]);
  const [item, setItem] = useState("");
  const stored = localStorage.getItem("listItem");

  function addProduct(item) {
    if (!item.trim()) return; // evita nomes vazios
    setListItem([...listItem, item]);
    setItem("");
  }

  function removeProduct(index) {
    const newList = [...listItem];
    newList.splice(index, 1);
    setListItem(newList);
  }


 useEffect(() => {
    try {
      if (stored) {
        const parsed = JSON.parse(stored);
        setListItem(parsed);
      }
    } catch (error) {
      console.error("Erro ao ler localStorage:", error);
    }
  }, []);


    useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(listItem));
  }, [listItem]);

  return (
    <>
      <div id="listShopping">
        <h4>Total de Itens: {listItem.length}</h4>
        <div id="controlPlusPeople">
          <TextField
            label="Nome do produto"
            variant="filled"
            value={item}
            onChange={(e) => setItem(e.target.value)}
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
          <Button variant="contained" onClick={() => addProduct(item)}>
            Adicionar
          </Button>
        </div>
        <Grid spacing={2}>
          <Grid item xs={12} md={6}>
            <List dense={true}>
              {listItem.map((item, index) => (
                <ListItem className="item_list" key={index}>
                  <ListItemText primary={item} />
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={() => removeProduct(index)}
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
