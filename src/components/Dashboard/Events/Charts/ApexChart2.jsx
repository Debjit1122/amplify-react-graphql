import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Earnings",
                    data: [1500, 2000, 1800, 2500, 2200, 2800, 3000, 3500, 3200],
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    colors: ['hsl(190, 100%, 20%)'], // Update the line color here
                },
                markers: {
                    colors: ['hsl(190, 100%, 20%)'], // Update the dot color here
                },
                title: {
                    text: 'Earnings Trends by Month',
                    align: 'left',
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                },
                tooltip: {
                    marker: {
                        fillColors: ['hsl(190, 100%, 20%)'], // Update the tooltip dot color here
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="earnings-chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height={350}
                />
            </div>
        );
    }
}

export default ApexChart2;
