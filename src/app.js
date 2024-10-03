import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const { PORT, PUBLIC_PATH } = envs;

const main = () => {
  startServer({ port: PORT, public_path: PUBLIC_PATH });
};

// Función agnóstica autoconvocada
// Agnóstica por que no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
(async () => {
  main();
})();
