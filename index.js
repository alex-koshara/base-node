
import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 3000;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.otj3r0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);
// app.use('/users', userRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))
  } catch (e) {
    console.error(e)
  }
}

startApp();