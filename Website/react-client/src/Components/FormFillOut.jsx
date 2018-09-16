import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';

class FormFillOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      situation: this.props.situation,
      thoughts: this.props.thoughts,
      emotions: this.props.emotions,
      physicalscenario: this.props.physicalscenario,
      othernotes: this.props.othernotes
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = { [event.target.name]: event.target.value };
    this.setState(change);
  }

  handleSubmit(event) {
      event.preventDefault();
    let index = 0;
    for(let i = 0; i < this.props.data.length; i++) {
      if(Object.values(this.props.data[i]).filter(x => !x).length) {
        index = i;
        break;
      }
    }
    for (var property in this.state) {
      if (this.state[property]) {
            this.props.updateField(index, property,this.state[property]);  
      }
    }
    this.props.togglePopup();

  }


  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Reflect on the day.</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
        <span class="form-text">Situation:</span>
        <input type="text" name="situation" value={this.state.situation} onChange ={this.handleChange}/>
        </label>
        <label>
        <span class="form-text">Thoughts:</span>
        <input type="text" name="thoughts" value={this.state.thoughts} onChange ={this.handleChange}/>
        </label>
        <label>
        <span class="form-text">Emotions:</span>
        <input type="text" name="emotions" value={this.state.emotions} onChange ={this.handleChange}/>
        </label>
        <label>
        <span class="form-text">Physical Scenario:</span>
        <input type="text" name="physicalscenario" value={this.state.physicalscenario}
        onChange ={this.handleChange}/>
        </label>
        <label>
        <span class="form-text">Other Notes:</span>
        <input type="text" name="othernotes" value={this.state.othernotes} onChange ={this.handleChange}/>
        </label>
        <input class="submitter" type="submit" value="Submit" />
        </form>
        </div>
      </div>
    )
  }


}
export default FormFillOut;
