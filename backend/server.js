require("dotenv").config();

const express = require("express");
const cors = require("cors");

const glacesRoutes = require("./routes/glaces");
const granitesRoutes = require("./routes/granites");
const machinesRoutes = require("./routes/machines");
const parfumsItaliennesRoutes = require("./routes/parfumsItaliennes");
const italiennesRoutes = require("./routes/italiennes");
const gourmandisesRoutes = require("./routes/gourmandises");
const connexionRoutes = require("./routes/connexion");
const boissonsRoutes = require("./routes/boissons");

const app = express();

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

app.use(cors());
app.use(express.json());

app.use("/api/glaces", glacesRoutes);
app.use("/api/granites", granitesRoutes);
app.use("/api/machines", machinesRoutes);
app.use("/api/parfums-italiennes", parfumsItaliennesRoutes);
app.use("/api/italiennes", italiennesRoutes);
app.use("/api/gourmandises", gourmandisesRoutes);
app.use("/api/connexion", connexionRoutes);
app.use("/api/boissons", boissonsRoutes);

app.listen(PORT, HOST, () => {
  console.log(`→ Local     : http://localhost:${PORT}`);
  console.log(`→ Réseau    : http://${HOST}:${PORT}`);
});
