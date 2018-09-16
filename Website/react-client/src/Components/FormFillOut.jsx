import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FormFillOut extends React.Component {
  constructor(props) {
    console.log("Constructed");
    super(props);
    this.state = {
      situation: '',
      thoughts: '',
      emotions: '',
      physicalscenario: '',
      othernotes: ''
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = { [event.target.name]: event.target.value };
    console.log(change);
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    for (var property in this.state) {
      this.props.updateField(0,property,this.state[property]);
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
        Situation:
        <input type="text" name="situation" value={this.state.situation} onChange ={this.handleChange}/>
        </label>
        <label>
        Thoughts:
        <input type="text" name="thoughts" value={this.state.thoughts} onChange ={this.handleChange}/>
        </label>
        <label>
        Emotions:
        <input type="text" name="emotions" value={this.state.emotions} onChange ={this.handleChange}/>
        </label>
        <label>
        Physical Scenario:
        <input type="text" name="physicalscenario" value={this.state.physicalscenario}
        onChange ={this.handleChange}/>
        </label>
        <label>
        Other Notes:
        <input type="text" name="othernotes" value={this.state.othernotes} onChange ={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    )
  }


}
export default FormFillOut;
