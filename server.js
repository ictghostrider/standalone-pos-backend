
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./index');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log(`🚀 POS API server running on port ${PORT}`);
});
