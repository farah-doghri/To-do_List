import {Component} from "react";

var uuid = require('uuid');


export default class Form extends Component {
  setTasks = this.props.setTasks;
  
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      message: ""
    };

    this.getMessage = this.getMessage.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid.v1(),
      titre: this.state.title,
      message: this.state.message
    };
    
    this.setTasks(prev => [...prev, newItem]);
    
  }

  getTitle = (e) => {
    this.setState({title: e.target.value});
  }

  getMessage = (e) => {
    this.setState({message: e.target.value});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.getTitle} placeholder="Titre"/>
          <textarea rows="3" value={this.state.value} onChange={this.getMessage} placeholder="Message" />
          <button id="submit_btn" type={"submit"}>Ajouter une tâche</button>
          <p id="errorMsg"></p>
        </form>
    );
  }
}