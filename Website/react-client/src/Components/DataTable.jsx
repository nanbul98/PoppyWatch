import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import styles from '../../dist/styles.css';
import FormFillOut from './FormFillOut';
import { CSSTransitionGroup } from 'react-transition-group'


class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      data: [{
        time: 32222,
        location: 'a place',
        heartrate: 123,
        situation: '' ,
        thoughts: 'asd',
        emotions: 'sad',
        physicalscenario: 'dfs',
        othernotes: 'sdf'
      }, {
      time: 321122,
      location: 'another place',
      heartrate: 12,
      situation: 'ht' ,
      thoughts: 'ew',
      emotions: 'erw',
      physicalscenario: 'er',
      othernotes: 'e'}]
    }
    this.updateField = this.updateField.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  togglePopup() {
  this.setState({
    showPopup: !this.state.showPopup
  });

}

  updateField (row, key, value) {
    this.state.data[row][key] = value;
    this.render();

  }

  isEmpty() {
    let empty = false;
      for (var property of this.state.data) {
        console.log(property);
        let values = Object.values(property);
        for (var i = 0; i < values.length; i++) {
          if (!values[i]) {
            empty = true;
          }
          console.log(values[i]);
        }
      }
      return empty
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
    let popup = this.state.showPopup &&
    <FormFillOut
      updateField={this.updateField}
      togglePopup={this.togglePopup}
      data={this.state.data}
    />
    console.log(popup)
    if (this.isEmpty()) {
      return (<div class="table-container">
        <button class="button unfilled" onClick= {this.togglePopup.bind(this)}><span>Record Your Experience</span>
        </button>
        <CSSTransitionGroup
        transitionName="popup">
          {popup}
        </CSSTransitionGroup>
        <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize = {5}
          pageSizeOptions = {[5, 10]}
        />
            </div>
      );
    }
    return (<div>
        <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize = {5}
          pageSizeOptions = {[5, 10]}
          />
      </div>
    );
  }
}


export default DataTable;
