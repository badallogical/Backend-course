const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.sendFile("D:/Work/Backend/mongoDB/public/index.html")
})

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  
  // Do something with the form data
  // For example, save it to a database or send an email
  
  res.send('Form submitted successfully! with '  + name + " " + email + " " + message );
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
