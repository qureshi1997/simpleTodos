import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onClickDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="listItem">
      <p>{title}</p>
      <button type="button" onClick={onClickDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
