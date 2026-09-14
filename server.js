import express from "express";
import argon2 from "argon2";

const app = express();

app.use(express.json());
app.use(express.static("."));

// const password = "114514";

// const passwordHash = await argon2.hash(password);

// console.log(password);
// console.log(passwordHash);

const users = [
    // {
    //     userName: "Jonas",
    //     thePassword: passwordHash
    // },
    // {
    //     userName: "Spinel",
    //     thePassword: "1919810"
    // }
];


app.post("/register", async (req, res) => {
    console.log(req.body);
    console.log(67);
    const userName = req.body.userName;
    const thePassword = req.body.thePassword;

    const passwordHash = await argon2.hash(thePassword);

    users.push({
        userName: userName,
        thePassword: passwordHash
    });

    res.status(201).json({
        message: "Registeration successful"
    });
});


app.post("/login", async (req, res) => {
    console.log(req.body);

    const userName = req.body.userName;
    const thePassword = req.body.thePassword;

    const user = users.find(
        u => u.userName === userName
    );

    if (user) {
        const valid = await argon2.verify(
            user.thePassword,
            thePassword
        );

        if (valid) {
            res.status(200).json({
                message: "Login successful"
            });
        } else {
            res.status(401).json({
                message: "Login failed"
            });
        }


    } else {
        res.status(401).json({
            message: "Login failed"
        });
    }

    
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});