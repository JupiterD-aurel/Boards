 // setup 
    const data = {
      labels: ['Projet 1', 'Projet 2', 'Projet 3', 'Projet 4', 'Projet 5'],
      datasets: [{
        label: 'Temps estimé',
        data: [
		['2022-01-01', '2022-04-01'],	
		['2022-04-01', '2022-07-01'],	
		['2022-03-01', '2022-05-31'],	
		['2022-06-01', '2022-09-30'],	
		['2022-10-01', '2022-12-31'],	
],
		taskCompleted: [100, 100, 100, 100, 100 ],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
		borderSkipped: false,
},

{       label: 'Temps réel',
        data: [
		['2022-01-01', '2022-03-25'],	
		['2022-04-01', '2022-07-15'],	
		['2022-03-01', '2022-05-31'],	
		['2022-06-01', '2022-10-30'],	
		['2022-10-01', '2022-12-31'],	
],
		taskCompleted: [100, 80, 75, 100, 90],
        backgroundColor: 'rgba(255, 26, 104, 0.2)',
        borderColor: 'rgba(255, 26, 104, 1)',
        borderWidth: 1,
		borderSkipped: false,
},

]};

    // config 
    const config = {
      type: 'bar',
      data,
      options: {
		plugins: {
			tooltip:{
		//enabled: false
		filter: (tooltipItem) => {
			//console.log(tooltipItem.datasetIndex);
			return tooltipItem.datasetIndex === 1;
},
		yAlign: 'bottom',
		callbacks: {
			label: (context) => {
				const taskPercentage = context.dataset.taskCompleted[context.dataIndex];
				const completedDate =new Date(context.parsed.x);
				const cleanedDate = completedDate.getFullYear() + '/' + (completedDate.getMonth() + 1) + '/' + completedDate.getDate();

				const realtime = new Date(data.datasets[1].data[context.dataIndex][1]);
				const projecttime = new Date(data.datasets[0].data[context.dataIndex][1]);
				
				const dateDifference = realtime - projecttime ;

			let delay = Math.floor(dateDifference / (1000*60*60*24));
			delay = delay < 0 ? 0 : delay ;

			const response = taskPercentage === 100 ?
				`Completed Date: ${cleanedDate}, Total Delay of ${delay} Days`:
				`Ongoing Project ${cleanedDate}`;

				return response ; //cleanedDate + 'and delays of DELAY. Days'
}
}
},
		datalabels: {
			formatter: (value, context) => {
		const taskPercentage = context.dataset.taskCompleted[context.dataIndex];
		return `${taskPercentage}%`;			
}
}
},
		indexAxis: 'y',
        scales: {
          x: {
			offset: false,
			min: '2022-01-01',
            position: 'top',
			type: 'time',
			time: { 
		unit: 'quarter'},
			ticks: {
			align: 'start'},
			grid:{
				borderDash: [5, 5]},
          },
          y: {
            beginAtZero: true
          },
        },
      },
		plugins: [ChartDataLabels]
    };

    // render init block
    const myChart3 = new Chart(
      document.getElementById('myChart3'),
      config
    );