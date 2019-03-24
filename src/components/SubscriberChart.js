import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { fetchSubscribers } from '../actions/subscriberActions'

const Chart = styled.div`
  margin-top: 32px;
  background-color: #d6d6d6;
  border-radius: 12px;
  width: 500px;
`

const options = {
  scales: {
    yAxes: [{
      stacked: true
    }]
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    subscribers: state.subscribers
  }
}

export default connect( mapStateToProps, { fetchSubscribers })( class SubscriberChart extends Component {
  data = {
    labels: [],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
        // data: [0, 330]
      }
    ]
  };


  

  mapDispatchToProps = () => {
    return {
      fetchSubscribers
    }
  }

  componentWillMount = () => {
    this.props.fetchSubscribers();
    setInterval(() => {
      this.props.fetchSubscribers()
    }, 10000)
  }

  componentWillReceiveProps = (nextProps) => {
    this.data.datasets[0].data = nextProps.subscribers.users.slice(1).map( x => x.length)
    if (this.data.datasets[0].data.length > 0){
      this.data.labels.push(new Date().toUTCString().substring(18))

    }
  }
  
  render() {
    
    return (
      <Chart>
        <Line options={options} data={this.data} ref={(ref) => this.chart = ref }/>
      </Chart>
    )
  }
})

