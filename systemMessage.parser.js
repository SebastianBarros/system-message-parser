import fs from "fs/promises";
import text from "./messages.js";

const parsedMessages = text.split("\n").reduce((acum, curr) => {
  const key = curr.split("=")[0].trim();
  const value = curr.split("//")[1]?.trim() || '';
  return {
    ...acum,
    [key]: value,
  };
}, {});

fs.writeFile("./system-messages.json", JSON.stringify(parsedMessages));
