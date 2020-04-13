import React ,{ useEffect , useState , useContext } from 'react';
import FormAddTodo from './../Components/Todo/FormAddTodo';
import TodoList from './../Components/Todo/TodoList';
import TodoContext from './../Context/todos';
import todoApi from './../Api/todos';

function Home() {

    const [loading , setLoading] = useState();
    const todoContext = useContext(TodoContext);

    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todos.json`)
        .then(response => jsonHandler(response.data))
        .catch(err => {});
    },[])
    let jsonHandler = (data) => {
        setLoading(false)
        let todos =  Object.entries(data).map(([key , value]) => { return { ...value, key}})
        todoContext.dispatch({ type : 'init_todo' , payload : { todos }})
    }

    return (
        <>
            <section className="jumbotron" style={{backgroundColor:'#f6e58d'}}>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome to my TODO application</h1>
                    <br/>
                    <FormAddTodo />
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                    {
                        loading ? <h2>Loading data ...</h2> : ( <TodoList /> )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
