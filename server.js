import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("."));

const user = {
    userName: "Jonas",
    thePassword: "114514"
};


app.post("/login", (req, res) => {
    console.log(req.body);

    const userName = req.body.userName;
    const thePassword = req.body.thePassword;

    if (userName === user.userName &&
        thePassword === user.thePassword
    ) {
        res.status(200).json({
            message: "Login successful"
        });
    } else {
        res.status(401).json({
            message: "Login failed"
        });
    }

    
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});