import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import '../styles/BarGraph.css';

export default function BarGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['1 Aug', '8 Aug', '15 Aug', '22 Aug', '29 Aug', '5 Sep', '8 Sep'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: "#FFA800",
                    borderColor: "#FFA800",
                    data: [65, 59, 80, 81, 56, 55, 42]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: "#E5EAEE",
                    borderColor: "#E5EAEE",
                    data: [28, 48, 40, 19, 86, 27, 55]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
      <div className='bar-top' style={{ width: "80%", margin: "5% 0 0 17%" }}>
        <div className="top-sec">
          <h2>Recent Stats</h2>
          <p>More than 400+ new members</p>
          <div className="btnGrp">
            <div className="btnM">Month</div>
            <div className="btnW">Week</div>
            <div className="btnD">Day</div>
          </div>
        </div>
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
    );
}

        