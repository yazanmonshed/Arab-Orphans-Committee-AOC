import React, { Component } from 'react';
import {Bar, Line,Pie} from 'react-chartjs-2';

export default class ChartMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChartData : {   
                labels: ['قروض مستردة بدون فائدة', 'منج طلبة الجامعات الفلسطينية', 'منح وكفالات الجامعات الأردنية'],
                datasets: [{
                    label: '# of Votes',
                    data: [69, 17, 14],
                    backgroundColor: [
                      '#05668D',
                      '#028090',
                      '#00A896',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],  
                    borderWidth: 1
                }]
            

            }
        }
    }
  render() {
    return (
      <section> 
          <Pie 
          data={this.state.ChartData}
            // options={{
            //     title: {
            //         display: true,
            //         text: 'توزيع الطلاب حسب التخصصات',
            //         fontSize: 30,

            //     }
            // }}
          />
      </section>
    );
  }
}
