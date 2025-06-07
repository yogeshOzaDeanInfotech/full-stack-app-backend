import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(
    cors({
        origin: ["http://localhost:5173", "http://3.7.46.55"],
    })
);

app.listen(port, () => {
    console.log(`App is started on port ${port}`);
});

let users = [
    { name: "Yogesh", email: "Yogesh@gmail.com" },
    { name: "virat", email: "virat@gmail.com" },
    { name: "dhoni", email: "dhoni@gmail.com" },
    { name: "deepak", email: "deepak@gmail.com" },
    { name: "deepak", email: "deepak@gmail.com" },
];

app.get("/api/users", async (req, res) => {
    res.status(200).json({
        status: true,
        users,
    });
});
