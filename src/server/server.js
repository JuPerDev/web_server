import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Definir __dirname correctamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const startServer = (options) => {
  const { port, public_path = "public" } = options;
  const app = express();

  // Servir archivos estáticos correctamente usando __dirname
  const publicDir = path.join(__dirname, "../../", public_path);
  app.use(express.static(publicDir));

  // Manejar todas las rutas no definidas con el archivo index.html
  app.get("*", (req, res) => {
    const indexPath = path.join(publicDir, "index.html");
    res.sendFile(indexPath);
  });

  // Iniciar el servidor en el puerto especificado
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
};
