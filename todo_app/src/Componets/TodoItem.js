function TodoItem( props ) {
    return(
      <li>
        <span>V { props.completed }</span>
        <p> { props.text } </p>
        <span>x</span>
      </li>
    );
}

export { TodoItem };
