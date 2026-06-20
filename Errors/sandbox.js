// async await data fetching and error

const getTodos = async () => {
    
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;
};

getTodos()
  .then(data => console.log('resolved:', data));
