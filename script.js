function calculateTransferTime() {
    const flight1Arrival = new Date(document.getElementById('flight1-arrival').value);
    const flight2Departure = new Date(document.getElementById('flight2-departure').value);
    const flight3Arrival = new Date(document.getElementById('flight3-arrival').value);
    const flight4Departure = new Date(document.getElementById('flight4-departure').value);

    const transferTime1 = (flight2Departure - flight1Arrival) / (1000 * 60); // in minutes
    const transferTime2 = (flight4Departure - flight3Arrival) / (1000 * 60); // in minutes

    const resultDiv = document.getElementById('result');
    if (transferTime1 > 60 && transferTime2 > 60) {
        resultDiv.innerHTML = `<p class="text-green-500 font-bold">Transfer time is sufficient. Time in B: ${transferTime1} minutes for first transfer, ${transferTime2} minutes for second transfer.</p>`;
    } else {
        resultDiv.innerHTML = `<p class="text-red-500 font-bold">Transfer time is not sufficient. Time in B: ${transferTime1} minutes for first transfer, ${transferTime2} minutes for second transfer.</p>`;
    }
}