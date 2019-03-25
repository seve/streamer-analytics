import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import { fetchSubscribers } from '../actions/subscriberActions'
import {COLORS} from '../colors'

const Chart = styled.div`
  margin-top: 32px;
  background-color: ${COLORS.LAVENDER};
  /* background-color: #FFFFFF; */
  border-radius: 12px;
  width: 75%;
  -webkit-box-shadow: 0px 10px 82px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 82px -7px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 82px -7px rgba(0,0,0,0.75);

`

const mapStateToProps = (state) => {
  console.log(COLORS.BLUE);
  
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
        fontColor: 'black',
        label: 'Subscribers',
        fill: true,
        lineTension: 0.1,
        backgroundColor: COLORS.BLUE ,
        borderColor: COLORS.BLUE,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: COLORS.BLUE,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      }
    ]
  };
  
  options = {
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          color: COLORS.DARK_BLUE,
        },
        ticks: {
          fontColor: COLORS.DARK_BLUE,
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: COLORS.DARK_BLUE,
        },
        gridLines: {
          color: COLORS.DARK_BLUE,
        }
      }]
    },
    legend: {
        display: true,
        labels: {
            fontColor: '#000'
        }
    },
    title: {
      display: 'true',
      text: 'Subscribers Over Time',
      fontColor: "#000"
    }
  }



  

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
        <Line options={this.options} data={this.data} ref={(ref) => this.chart = ref }/>
      </Chart>
    )
  }
})

