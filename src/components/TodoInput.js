const TodoInput = ({text, inputChange, saveTodo}) => {
  return (
    <>
      <section className="todo-container">
        <input
          type="text"
          value={text}
          className="todo-input"
          placeholder="Add a new task..."
          onChange={inputChange}
          required
        />
        <button className="save-button" onClick={saveTodo}>
          Save Task
        </button>
      </section>
    </>
  );
};

export default TodoInput;