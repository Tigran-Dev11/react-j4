/* eslint-disable react/prop-types */

const TodoItem = ({ todo }) => {
  const { completed, title, id } = todo;

  return (
    <li>
      <input type="checkbox" checked={completed} />
      <p>{title}</p>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
