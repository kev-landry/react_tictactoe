import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import StatMorpion from './stats-morpion';
import MORPIONSTATS from './globals.js';

export class Chart extends Component {
    
    constructor(props){
        super(props);
        this.interval = null;
    }

    receiveData(){
        // StatMorpion.getWinners(MORPIONSTATS);
    }

    render() {
        console.log(MORPIONSTATS);
        var simpleLineChartData = {
            labels: ['Player X', 'Player O'],
            series: [10, 5]
          }
          var type = 'Pie';

        return (
            <div>
                {/* <div ChartistGraphclassName="ct-chart ct-minor-third"></div> */}
                <ChartistGraph data={simpleLineChartData} type={type} />
                <div>Pourcentage de victoire</div>
            </div>
        )
    }
    
}

export default Chart;