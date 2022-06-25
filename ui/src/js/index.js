"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let signalR;
const canvas = document.getElementById("pick");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(40, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
const connection = new signalR.HubConnectionBuilder()
    .withUrl("")
    .configureLogging(signalR.LogLevel.Information)
    .build();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.start();
            console.log("SignalR connected");
        }
        catch (error) {
            console.error("error");
            setTimeout(() => {
                start();
            }, 5000);
        }
    });
}
connection.onclose(() => __awaiter(void 0, void 0, void 0, function* () {
    yield start();
}));
start();
//# sourceMappingURL=index.js.map