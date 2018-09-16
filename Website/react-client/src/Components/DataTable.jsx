import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import styles from '../../dist/styles.css';
import FormFillOut from './FormFillOut';
import { CSSTransitionGroup } from 'react-transition-group'
import fire from '.././fire';
import moment from 'moment';


var firebaseRef = fire.database().ref("users")

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
<<<<<<< HEAD
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
      situation: '' ,
      thoughts: '',
      emotions: '',
      physicalscenario: '',
      othernotes: ''}],
      users: []
=======
      unfilledRows: [0,0],
      data: []
>>>>>>> Database connections added after merge conflicts
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

  componentDidMount() {
    firebaseRef.on('value', snapshot => {
      this.setState({data: Object.values(snapshot.val())[0].events, userKey: Object.keys(snapshot.val())[0]});

      firebaseRef.child(this.state.userKey).child('events').child('-LMXacBtOjTlhW6XQSbN').update({ 
        heartRate: 654, 
        location: "40 40", 
        time: 25353563, 
        situation: "stuff happened",
        thoughts: "test",
        emotions: "emotional",
        physicalScenario: "physics?",
        othernotes: "notes"
      }), (error) => {
       if (error) {
         console.log(error.message);
       } 
      };
    });
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
    document.getElementById('root')

    const columns = [{
      Header: 'Time',
      accessor: 'time'
    },{
      Header: 'Location',
      accessor: 'location'
    }, {
      Header: 'Heart Rate',
      accessor: 'heartRate'
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
      accessor: 'physicalScenario'
    }, {
      Header: 'Other Notes',
      accessor: 'othernotes'
    }]

    if (Object.keys(this.state.data).length) {
      Object.values(this.state.data).forEach(element => {
         element.time = moment(element.time).format("DD/MM/YYYY LT")
      } );
    }

    let popup = this.state.showPopup &&
    <FormFillOut
      updateField={this.updateField}
      togglePopup={this.togglePopup}
      data={this.state.data}
    />
<<<<<<< HEAD
    console.log(popup)
    if (this.isEmpty()) {
=======

    if (this.state.unfilledRows.length) {
      console.log(Object.values(this.state.data));
>>>>>>> Database connections added after merge conflicts
      return (<div class="table-container">
        <button class="button unfilled" onClick= {this.togglePopup.bind(this)}><span>Record Your Experience</span>
        </button>
        <CSSTransitionGroup
        transitionName="popup">
          {popup}
        </CSSTransitionGroup>
        <ReactTable
          data={Object.values(this.state.data)}
          columns={columns}
          defaultPageSize = {5}
          pageSizeOptions = {[5, 10]}
        />
        </div>
      );
    }
    return (<div>
        <ReactTable
          data={Object.values(this.state.data)}
          columns={columns}
          defaultPageSize = {5}
          pageSizeOptions = {[5, 10]}
          />
      </div>
    );
  }
}


export default DataTable;
