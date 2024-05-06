function Button({ title, onClick }) {
  return <button onClick ={onClick}>{(title = title)}</button>;
}

export default Button;
