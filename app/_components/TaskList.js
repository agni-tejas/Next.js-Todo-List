// component import

import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  deleteTask,
  toggleTask,
  enterEditMode,
  toggleImportant,
}) => {
  return (
    <>
      {tasks.length > 0 && (
        <div className="h-[220px] overflow-y-auto custom-scrollbar">
          <ul className="grid list-none">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
                toggleImportant={toggleImportant}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default TaskList;
