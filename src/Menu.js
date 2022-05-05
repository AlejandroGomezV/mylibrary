import React from "react";
import Search from "./Search";
import PanelAdd from "./PanelAdd";
import "./Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newItemPanel: false };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({ newItemPanel: true });
    console.log("add book");
  }

  onCancel(){
    this.state = { newItemPanel: false };
  }

  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="logo">{this.props.title}</div>
          <div className="search">
            <Search />
          </div>
          <div className="actions">
            <button onClick={this.add} className="button btn-blue">
              + Add new book
            </button>
          </div>
        </div>
        {this.state.newItemPanel ? <PanelAdd onCancel={this.onCancel} /> : ""}
      </div>
    );
  }
}

export default Menu;