import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import restrictedRoutes from "./routes/restrictedRoutes.js";

// Get the directory path of the current module file
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "main.html"));
});

app.use("/", restrictedRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
