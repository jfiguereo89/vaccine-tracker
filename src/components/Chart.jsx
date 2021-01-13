import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }
  componentDidMount() {
    console.log(this.chartReference); //returns an instance of Chart.js instance reference
  }
  render() {
    return <Line ref={this.chartReference} data={data} options={options} />;
  }
}

export default Chart;
