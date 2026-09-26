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
    if (req.url === "/" && req.method === "GET"){
        res.writeHead(200, { "Content-TYpe": "text/plain; charset=utf-8"});
        res.end("Bienvenue dans SangConnect");
        return;
    }

    if (req.url === "/api/health" && req.method === "GET"){
        res.writeHead(200, { "Content-TYpe": "text/plain; charset=utf-8"});
        res.end("API Opérationnelle");
        return;
    }

    if(req.url === "/api/info" && req.method === "GET"){
        res.writeHead(200, { "Content-TYpe": "text/plain; charset=utf-8"});
        res.end("SangConnect - API de gestion des dons de sang");
        return;
    }

    res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("Route non trouvée");

    console.log("Méthode :", req.method);
    console.log("URL :", req.url);
});
server.listen(port, () => { console.log(`Serveur démarré sur http://localhost:${port}`)});

