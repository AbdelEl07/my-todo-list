const TodoList = ({todoList, deleteTask}) => {
  return (
    <>
      <section>
        <ul className="todo-list">
          {todoList.map((value, index) => {
            return (
              <li className="todo-item" key={index}>
                <span>{value.name || "Untitled Task"}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TodoList;