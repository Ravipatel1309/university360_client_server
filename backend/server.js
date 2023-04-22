const express = require("express");
// const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require('path');

dotenv.config();
connectDB();
app.use(express.json());

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));



// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// })

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

// --------------------------deployment------------------------------
// __dirname = 'http://localhost:5000';

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}
// --------------------------deployment------------------------------

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));