import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfilledRows: [9,11]
    }
  }

  render() {
    document.getElementById('root')
    const data = [{
      time: 'Roy Agasthyan',
      location: 26,
      heartrate: 72
    },{
      name: 'Sam Thomason',
      age: 22
    },{
      name: 'Michael Jackson',
      age: 36
    },{
      name: 'Samuel Roy',
      age: 56
    },{
      name: 'Rima Soy',
      age: 28
    },{
      name: 'Suzi Eliamma',
      age: 28
    }]

    const columns = [{
      Header: 'Time',
      accessor: 'time'
    },{
      Header: 'Location',
      accessor: 'location'
    }, {
      Header: 'Heart Rate',
      accessor: 'heartrate'
    }, {
      Header: 'Situation',
      accessor: 'situation'
    }, {
      Header: 'Thoughts',
      accessor: 'thoughts'
    }, {
      Header: 'Emotions',
      accessor: 'emotions'
    }, {
      Header: 'Physical Scenario',
      accessor: 'physicalscenario'
    }, {
      Header: 'Other Notes',
      accessor: 'other notes'
    }]
    console.log('allo!!');
    if (this.state.unfilledRows.length) {
      console.log('allo');
      return (<div>
        <button>Things</button>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize = {6}
          pageSizeOptions = {[3, 6]}
        />
            </div>
      );
    }
    return (<div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize = {6}
          pageSizeOptions = {[3, 6]}
          />
      </div>
    );
  }
}


export default DataTable;
