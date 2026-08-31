import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const userdata = [
    {
        id: 1,
        name: "cm",
        email: "c.m@abes.ac.in",
    }
  ]

  res.statusCode = 201;
  res.setHeader("Content-Type", "text/plain");
  if (url === "/msg" && method === "GET") { 
    res.end("Hello is welcome to my server");
  } 
  else if (url === "/sys" && method === "GET") {
    res.end("This is system information");
  }
  else if(url == "/data" && method == "GET"){
    res.statusCode=201;
    res.end(JSON.stringify(userdata));
  }
  else {
    res.end("Hellow Server");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// import http from "http";
// const server=http.createServer((req, res)=>{
// res.end("Hello Server");
// })
// server.listen(3000,()=>{
//     console.log("server is running on port number 3000");
// })


//assignmet make .jason file