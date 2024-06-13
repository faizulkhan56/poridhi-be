const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    let log = `${Date.now()} : ${req.url} : New Request Received \n`; // Change const to let
    const parsedUrl = url.parse(req.url, true);
    console.log(req.url);
    console.log(parsedUrl);
    log += `Query Parameters: ${JSON.stringify(parsedUrl.query)}\n`;

    fs.appendFile('log2.txt', log, (err, data) => {
        switch (parsedUrl.pathname) {
            case '/':
                res.end("Home Page");
                break;

            case '/about':
                const username = parsedUrl.query.myname;
                const userid = parsedUrl.query.userid;
                console.log(username);
                console.log(userid);
                res.end(`Hii, ${username} you got ${userid} please lock it`);
                break;

            case "/search":
                const search = parsedUrl.query.search_query;
                console.log(search);
                res.end("Here are your results for " + search);
                break;

            default:
                res.end("404 Not Found from server end");
        }
    });
});

const PORT = 8000;
myServer.listen(PORT, () => {
    console.log(`Server started at port no ${PORT}`);
});