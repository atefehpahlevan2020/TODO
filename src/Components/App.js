import React , { useReducer } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import loadable from '@loadable/component';
import Header from './Layouts/Header';
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';
import AppReducer from './../Reducers/appReducer';



const Home = loadable(() => import('./../Routes/Home'));
const About = loadable(() => import('./../Routes/About'));
const Contact = loadable(() => import('./../Routes/Contact'));
const Todo = loadable(() => import('./../Routes/Todo'));
const NotFound = loadable(() => import('./../Routes/NotFound'));

function App() {
    const [state , dispatch] = useReducer(AppReducer ,{
        todos : [],
        authenticated : false
    })
    return (
        <Router>
            <AuthContext.Provider value={{
                authenticated : state.authenticated,
                dispatch
            }}>
                <TodosContext.Provider value={{
                    todos : state.todos,
                    dispatch
                }}>
                    <div className="App">
                        <Header />
                        <main>
                            <Switch>
                                <Route path="/" exact component={Home} title='Home Page'/>
                                <Route path="/about" component={About} title='About Page'/>
                                <Route path="/contact" component={Contact} title='Contact Page'/>
                                <Route path="/todos/:todo" component={Todo}/>
                                <Route path="/404" component={NotFound} title='Not Found Page'/>
                                <Route path="" component={NotFound} title='Not Found Page'/>
                            </Switch>
                        </main>
                    </div>
                </TodosContext.Provider>
            </AuthContext.Provider>
        </Router>
    )
}
export default App;
