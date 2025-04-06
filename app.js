import estoque from "./estoque.js";
import express from "express";


const app = express();

app.get("/produtos", (req, res) => {
    res.status(200).json(estoque);
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
}
);

