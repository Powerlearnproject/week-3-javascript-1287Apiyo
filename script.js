// Sample data for Chart.js
let labels = ['January', 'February', 'March', 'April', 'May'];
let data = [65, 59, 80, 81, 56];

// Initialize Chart.js chart
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Data',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to add data to the Chart.js chart
function addData() {
    let newData = document.getElementById('dataInput').value;
    if (!isNaN(newData)) {
        labels.push('New Data');
        data.push(parseInt(newData));
        myChart.update();
    } else {
        alert('Please enter a valid number.');
    }
}
