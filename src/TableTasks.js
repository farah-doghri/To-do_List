import {Component} from "react";

export default class TableTasks extends Component {
  titre = this.props.titre;;
  message = this.props.message;
  id = this.props.id;
  btn_done_id = "btn_done" + this.id;
  btn_undone_id = "btn_undone" + this.id;

  

  deleteTask() {
    document.getElementById(this.id).remove();
  }

  completedTask() {
    document.getElementById(this.id).classList.add("task-done");
    document.getElementById(this.btn_done_id).classList.add ("no-display");
    document.getElementById(this.btn_undone_id).classList.remove ("no-display");
  }

  unCompletedTask() {
    document.getElementById(this.id).classList.remove("task-done");
    document.getElementById(this.btn_undone_id).classList.add ("no-display");
    document.getElementById(this.btn_done_id).classList.remove ("no-display");
  }
  
  render() {
  return (
    <div id={this.id} className="task-container">
      <div className="task-firstChild">
        <button id={this.btn_done_id} className="unchecked-btn" type="button" onClick={() => this.completedTask()}></button>
        <button id={this.btn_undone_id} className="no-display checked-btn" type="button" onClick={() => this.unCompletedTask()}><i className="fa fa-check"></i></button>
        <h3>{this.titre}</h3>
      </div>
      <p>{this.message}</p>
      <button className="delete-btn" type="button" onClick={() => this.deleteTask()}>Supprimer</button>
    </div>

  )
  }
}