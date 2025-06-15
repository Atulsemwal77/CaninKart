const express = require('express');
const app = express();
const cors = require('cors');
//env fie
const dotenv = require('dotenv');
dotenv.config();
const port = 5000;
const countryRouter = require('./Routes/CountryRouter');
const StateRouter = require('./Routes/State.routes');
const DistrictRouter = require('./Routes/DistrictRoutes')

require('./Models/db');

//middleware
app.use(cors());
app.use(express.json());

//Routes
// API Routes
app.use('/countries', countryRouter);
app.use('/state', StateRouter);
app.use('/district', DistrictRouter)

app.get('/',(req, res)=>{
  res.send("hello ji");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});