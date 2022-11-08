let TaskStore = {
  rows: [
    { name: "Planned", tasks: [{ id: 0, description: "Test Task" }] },
    { name: "In Progress", tasks: [] },
    { name: "Complete", tasks: [] },
  ],
  subscribers: [],
  subscribe: function (callback) {
    this.subscribers.push(callback);
  },
  updateSubscribers: function () {
    this.subscribers.forEach((callback) => {
      callback();
    });
  },
  addTask: function (addCommand) {
    let tmpTasks = this.rows[addCommand.row].tasks;

    this.rows[addCommand.row].tasks = [
      ...tmpTasks,
      {
        id: Math.floor(Math.random() * 100000000),
        description: addCommand.description,
      },
    ];

    this.updateSubscribers();
  },
  moveTask: function (moveCommand) {
    console.log(moveCommand);
    let curRowTasks = this.rows[moveCommand.curRow].tasks;

    //get the task
    let task = curRowTasks.slice(
      moveCommand.task.index,
      moveCommand.task.index + 1
    )[0];

    //remove from the older row
    let filterRow = curRowTasks.filter(
      (task, index) => index !== moveCommand.task.index
    );

    //set the older row data to the new row data
    this.rows[moveCommand.curRow].tasks = filterRow;

    //add the task to the new row
    this.rows[moveCommand.newRow].tasks = [
      ...this.rows[moveCommand.newRow].tasks,
      task,
    ];

    this.updateSubscribers();
  },
};

function AddCommand(row, description) {
  this.row = row;
  this.description = description;
}

function MoveCommand(curRow, newRow, task) {
  this.curRow = curRow;
  this.newRow = newRow;
  this.task = task;
}

export { TaskStore, AddCommand, MoveCommand };
