if ((process.env.NODE_ENV || "development") === "development") {
  require("dotenv").config();
}

import RPC from "discord-rpc";

const rpc = new RPC.Client({ transport: "ipc" });

const date = new Date();

rpc.on("ready", () => {
  console.log("RPC Ready");
  rpc.setActivity({
    startTimestamp: date,
    largeImageKey: "ganesh",
    largeImageText: "Ganesh",
    smallImageKey: "ganesh",
    smallImageText: "Ganesh",
    details: "Deva shree ganesha",
    state: "Ganapati Bappa Morya!",
    partySize: 69,
    partyMax: 420,
    buttons: [
      {
        label: "Shree ganesh",
        url: "https://www.youtube.com/watch?v=RYqJ5w-GrfM"
      },
      {
        label: "🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳",
        url: "https://arnu515.gq"
      }
    ]
  });
});

rpc
  .login({ clientId: process.env.DISCORD_APP_ID || "904032365553266748" })
  .then(() => console.log("RPC Connected"));
