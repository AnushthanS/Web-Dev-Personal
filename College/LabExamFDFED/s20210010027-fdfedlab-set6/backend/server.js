import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

app.post('/test', (req, res)=>{
    res.status(200).json({message: 'Working',});
})

app.listen(3000, () => {
    console.log("Server listenting at port 3000");
})