import express from 'express';
import router from './routers/user'; // Correct relative path

const app = express();

app.use(express.json()); // Required to parse JSON request bodies
app.use("/", router);    // All routes defined in router

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
