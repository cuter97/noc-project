import { Server } from "./presentation/server";

(async () => { main() })(); //self-invoked anonymous function

function main() {
    Server.start();
}

