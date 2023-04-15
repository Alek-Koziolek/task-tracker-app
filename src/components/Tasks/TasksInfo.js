
function TasksInfo(props){

  const percentage = Math.round(+props.completed / +props.allTasksNumber * 100);

  return <p>Tasks completed: <span>{props.completed}</span>/<span>{props.allTasksNumber}</span> ({percentage}%).</p>
}

export default TasksInfo;