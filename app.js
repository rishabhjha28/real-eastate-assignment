const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
dotenv.config({ path: './config.env' });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const estateRouter = require('./router/estates');
app.use('/estate', estateRouter);

const searchRouter = require('./router/search');
app.use('/search', searchRouter);

// app.get('*', (req, res) => {
//     res.json({ error: "bad request" });
// });
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// })
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))

}

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log("Server Started Successfully At Port", port);
});