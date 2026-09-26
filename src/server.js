/*

const applicationName = "SangConnect";
const applicationVersion = "1.0.0";

console.log(`Application : ${applicationName}`);
console.log(`Version : ${applicationVersion}`);

function displayApplicationInfo(){
    console.log(applicationName);
    console.log(applicationVersion);
}
displayApplicationInfo(); 

*/

import http from "node:http";
const port = 3000;
const server = http.createServer((req,res) => {
    res.writeHead(200, { "Content-TYpe": "text/plain; charset=utf-8"});
    res.end("Bienvenue dans SangConnect");
});
server.listen(port, () => { console.log(`Serveur démarré sur http://localhost:${port}`)});

