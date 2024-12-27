const express = require("express");
const nodemailer=require("nodemailer")
let app = express();

app.use((req, res, next) => {
//   if (req.path != "/users" && req.path != "/about") {
//     return res.status(404).send("Path not found");
//   } else {
// }
next();
});

app.get("/users", (req, res) => {
  res.send("welcome");
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.post("/sendEmail", (req, res) => {
    console.log("sendEmail")
  const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    service: "gmail",
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });

  var mailOptions = {
    from: "Your Email@gmail.com",
    to: "Receiver Email@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions,function(err,info){
    if(err){
        res.send(err)
    } else{
        res.send("Email has been sent")
    }
  })

//   res.send("test")

});

let port = 3000;
app.listen(port, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("server is running at port", port);
  }
});
