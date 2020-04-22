import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';

const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      data: []
    }
  }

  componentDidMount() {
    axios.get('/api')
    .then(res => {
      this.setState({
        labels: Object.keys(res.data.bpi),
        data: Object.values(res.data.bpi)
      })
      console.log(this.state)
    })
    .catch(err => console.log(err));
  }

  render() {
    const data = {
      labels: this.state.labels,
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: this.state.data
      }]
    };
    return (
      <div>
        <h1>Bitcoin Price</h1>
        <Bar data={data}/>
      </div>
    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));