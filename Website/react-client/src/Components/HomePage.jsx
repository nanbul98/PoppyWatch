import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';

class HomePage extends Component {
  render() {
    return (
      <div>
        <DataTable />
        Hello
      </div>
    )
  }
}

/*function tick() {
  const element = (
    <div>
      <h2>Hi!</h2>
      <h2>The time is: {new Date().toUTCString()}.</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('time'));
}*/

//setInterval(HomePage.render(), 1000);

export default HomePage;
