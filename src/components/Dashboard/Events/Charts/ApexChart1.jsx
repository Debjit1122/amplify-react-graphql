import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Seats Filled',
                    group: 'actual',
                    data: [40, 20, 30]
                },
                {
                    name: 'Seats Left',
                    group: 'actual',
                    data: [160, 140, 110]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                dataLabels: {
                    formatter: (val) => {
                        return val;
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                xaxis: {
                    categories: [
                        '21 Aug',
                        '22 Aug',
                        '23 Aug',
                        '24 Aug',
                        '25 Aug',
                        '26 Aug'
                    ]
                },
                fill: {
                    opacity: 1
                },
                colors: ['hsl(190, 100%, 20%)', 'hsla(190, 99%, 40%, 0.375)'],
                yaxis: {
                    labels: {
                        formatter: (val) => {
                            return val;
                        }
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                }
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default ApexChart1;
