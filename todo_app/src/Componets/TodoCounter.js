function TodoCounter({ total, completed }){
  
    return(
      <h1>
        Has Completado { completed } de { total } Todos
      </h1>
    );
  }

export{ TodoCounter }