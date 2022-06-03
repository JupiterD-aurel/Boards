const btn = document.querySelector("#btn");
const bar = document.querySelector(".bar");
const searchBtn = document.querySelector(".bx-search");

btn.onclick = function() {
 bar.classList.toggle("active");
}
searchBtn.onclick = function() {
 bar.classList.toggle("active");
}



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Complet',
            'En cours',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [20, 80],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
  
            ],
            hoverOffset: 4
        }]
    },
});
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Complet',
            'En cours',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [70, 30],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
  
            ],
            hoverOffset: 4
        }]
    },
});
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Complet',
            'En cours',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [50, 50],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
  
            ],
            hoverOffset: 4
        }]
    },
});

var ctx = document.getElementById('myChart4').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Complet',
            'En cours',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [50, 20],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
  
            ],
            hoverOffset: 2
        }]
    },
});