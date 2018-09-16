import React, { Component } from 'react';
import DataTable from './DataTable';

class HomePage extends Component {
  render() {
    return (
      <div class= "home">
        <div class="sidebar">
        </div>
        <DataTable />
      </div>
    )
  }
}

export default HomePage;
