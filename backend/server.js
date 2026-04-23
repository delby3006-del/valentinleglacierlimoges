require("dotenv").config();

const express = require("express");
const cors = require("cors");

const glacesRoutes = require("./routes/glaces");
const granitesRoutes = require("./routes/granites");
const machinesRoutes = require("./routes/machines");
const parfumsItaliennesRoutes = require("./routes/parfumsItaliennes");
const italiennesRoutes = require("./routes/italiennes");
const gourmandisesRoutes = require("./routes/gourmandises");
const boissonsRoutes = require("./routes/boissons");
const connexionRoutes = require("./routes/connexion");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/glaces", glacesRoutes);
app.use("/api/granites", granitesRoutes);
app.use("/api/machines", machinesRoutes);
app.use("/api/parfums-italiennes", parfumsItaliennesRoutes);
app.use("/api/italiennes", italiennesRoutes);
app.use("/api/gourmandises", gourmandisesRoutes);
app.use("/api/boissons", boissonsRoutes);
app.use("/api/connexion", connexionRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
