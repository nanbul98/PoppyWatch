import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import styles from '../../dist/styles.css';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfilledRows: [0,0],
      data: [{
        time: null,
        location: null,
        heartrate: null,
        situation:null ,
        thoughts: null,
        emotions: null,
        physicalscenario: null,
        othernotes: null,
      }]
    }
  }

  updateField (row, key, value) {
    data[row][key] = value;
  }

  render() {
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
      accessor: 'othernotes'
    }]
    console.log('allo!!');
    if (this.state.unfilledRows.length) {
      console.log('allo');
      return (<div>
        <button class="button"><span>Missing fields!</span></button>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize = {5}
          pageSizeOptions = {[3, 6]}
        />
            </div>
      );
    }
    return (<div>
        <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize = {1}
          pageSizeOptions = {[3, 6]}
          />
      </div>
    );
  }
}


export default DataTable;
