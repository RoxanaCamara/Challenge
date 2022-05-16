import logo from "./logo.svg";
import "./App.css";
import { Home } from "./module/Home";
import { useEffect, useState } from "react";
import { products } from "./server/Server";
import { Typography } from "@mui/material";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    products(setProductos);
  }, []);

  return (
    <>
      {productos.length > 0  ? (
        <Home productos={productos} />
      ) : (
        <Typography variant="body2" component="div" color="text.secondary">
          ups..paciencia
        </Typography>
      )}
    </>
  );
}

export default App;
