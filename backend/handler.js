"use strict";

let todos = [
  {
    id: 1,
    name: "Eat"
  },
  {
    id: 2,
    name: "Sleep"
  },
  {
    id: 3,
    name: "Die"
  }
];

module.exports.getTodos = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(todos)
  };
};
