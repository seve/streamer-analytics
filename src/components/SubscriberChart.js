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

const dataArray = [['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5]]

const data = {
  labels: dataArray.map(o => o[0]),
  datasets: [{
    fill: true,
    data: dataArray.map(o => o[1]),
    backgroundColor: '#495264',
    borderJoinStyle: 'miter',

  }]
}

const mapStateToProps = (state) => {
  return {
    user: state.user 
  }
}

export default connect( mapStateToProps, { fetchSubscribers })( class SubscriberChart extends Component {

  mapDispatchToProps = () => {
    return {
      fetchSubscribers
    }
  }

  componentWillMount = () => {
    this.props.fetchSubscribers();
    
  }
  
  render() {
    return (
      <Chart>
        <Line options={options} data={data}/>
      </Chart>
    )
  }
})

