import React, {useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';
class ApexChart1 extends React.Component {
    constructor(props) {
        super(props);
        const { eventTicketStartDate, attendeesCount, totalSeats } = this.props;
        const startDate = new Date(eventTicketStartDate);
        const currentDate = new Date();
        const categories = generateDateRangeCategories(startDate, currentDate);
        this.state = {
            series: [
                {
                    name: 'Seats Filled',
                    group: 'actual',
                    data: [attendeesCount]
                },
                {
                    name: 'Seats Left',
                    group: 'actual',
                    data: [totalSeats - attendeesCount]
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
                    categories: categories
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

function generateDateRangeCategories(startDate, endDate) {
    const categories = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const options = { day: 'numeric', month: 'short' };
        categories.push(currentDate.toLocaleDateString('en-US', options));
        currentDate.setDate(currentDate.getDate() + 1); // Increment by one day
    }

    return categories;
}

export default ApexChart1;
