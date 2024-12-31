// creating server using http module
// const http = require("http");

// const port = 3000;
// const hostname = '127.0.0.1';

// const server = http.createServer((req, res) => {

//     if(req.url === '/contact'){
//         res.end("Contact page");
//     }
//     else if(req.url === '/about') {
//         res.end("About page");
//     }else {
//         res.end("Home page")
//     }

// })

// server.listen(port, hostname, () => {
//     console.log(`Server is running at ${port}`);

// })

// Using express js

const express = require("express");
const app = express();

const port = 3000;

// Third party middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// Built-in middleware for common tasks, such as serving static files or parsing request bodies:
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

// HTML rendering in frontend in express
app.set("view engine", "ejs");

//custom middleware
app.use((req, res, next) => {
  console.log("This is middleware");
  const a = 12;
  const b = 34;
  console.log(a + b);

  return next();
});

app.get(
  "/",
//   (req, res, next) => {
//     console.log("Time", Date.now());

//     const a = 1;
//     const b = 4;
//     console.log(a + b);

//     next();
//   },
  (req, res) => {
    res.render("index");
  }
);

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('Data received');
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
