const express = require('express');
const app = express();

// Route for root
app.get("/", (req, res) => {
    res.send("Hello from server");
});

// Route for /Browse
app.get("/Browse", (req, res) => {
    res.send("Browse from server");
});

// Route for /test
app.get("/test", (req, res) => {
    res.send("test from server");
});

// Start server
app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
