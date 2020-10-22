require("dotenv").config();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: "",
    to: "",
    subject: "asunto importante",
    text: "Hola"
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log("ocurrió un error", err);
    }
    else {
        console.log("su mail se ha enviado");
    }
})