import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((item, index) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            completed={item.completed}
            title={item.title}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
