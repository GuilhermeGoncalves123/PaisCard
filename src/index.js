import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App.js";


// Cria a raiz da aplicação React, associando-a ao elemento com id "root" no HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente <App /> dentro de <React.StrictMode>
// O StrictMode ajuda a identificar problemas no desenvolvimento
root.render(<React.StrictMode><App /></React.StrictMode>);