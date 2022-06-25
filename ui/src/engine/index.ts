import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const canvas = document.getElementById("pick")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

ctx.beginPath();
ctx.rect(40, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

const connection = new HubConnectionBuilder()
  .withUrl("")
  .configureLogging(LogLevel.Information)
  .build();

async function start() {
  try {
    await connection.start();
    console.log("SignalR connected");
  } catch (error) {
    console.error("error");
    setTimeout(() => {
      start();
    }, 5000);
  }
}

connection.onclose(async () => {
  await start();
});

start();
