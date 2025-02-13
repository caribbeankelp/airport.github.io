const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/calculate', (req, res) => {
    const { flight1Arrival, flight2Departure, flight3Arrival, flight4Departure } = req.body;

    const flight1ArrivalDate = new Date(flight1Arrival);
    const flight2DepartureDate = new Date(flight2Departure);
    const flight3ArrivalDate = new Date(flight3Arrival);
    const flight4DepartureDate = new Date(flight4Departure);

    const transferTime1 = (flight2DepartureDate - flight1ArrivalDate) / (1000 * 60); // in minutes
    const transferTime2 = (flight4DepartureDate - flight3ArrivalDate) / (1000 * 60); // in minutes

    if (transferTime1 > 60 && transferTime2 > 60) {
        res.json({ message: `Transfer time is sufficient. Time in B: ${transferTime1} minutes for first transfer, ${transferTime2} minutes for second transfer.` });
    } else {
        res.json({ message: `Transfer time is not sufficient. Time in B: ${transferTime1} minutes for first transfer, ${transferTime2} minutes for second transfer.` });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});