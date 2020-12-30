import React, { Component } from 'react';
import "./test.css"


class Test extends Component {
  state = {
    skills : [
      {
        id : 1, element : <input type="text" id="firstSkill"></input>,
      },
      {
        id : 2, element : <input type="text" id="secondSkill"></input> 
      }
    ]
  };

  onChangeHandler = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    this.setState({
      ...this.state,
      [id] : value
    })
  }
  
  deleteHandler = (e) => {
    let id = e.target.id;
    console.log(id);
    let newSkills = this.state.skills.filter((skillObj) => {
      return skillObj.id != id
    })
    this.setState({
      skills : newSkills
    })
  }

  render() { 
    return (
      <div className="input-elements">
        {this.state.skills.map((skillObj) => {
          return <div id={skillObj.id}>
          {skillObj.element} <button id={skillObj.id} onClick = {(e) => {this.deleteHandler(e)}}></button>
          </div>
        })}
      </div>
    );
  }
}
 
export default Test;