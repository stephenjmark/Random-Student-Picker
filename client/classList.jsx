import React from "react";
import ReactDOM from "react-dom";
import students from "../cohort-data/hrnyc21";
import NameItem from "./nameItem.jsx";
import randomize from "./../randomizer.js";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ClassList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="normalNames names">
        {this.props.students.map((randItem, ind) => {
          return (
            <NameItem
              key={ind}
              className="name-item"
              handleWinner={this.props.handleWinner}
              item={randItem}
              wait={300 * ind}
              showBlock={this.props.showBlock}
              showName={true}
            />
          );
        })}
      </div>
    );
  }
}

export default ClassList;
