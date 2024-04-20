import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {console.log('Server listening at 3000');})

app.post('/api/hotels-list', async (req, res) => {
    res.status(200).json(
        { message: 'Everything works' }
    );
});