import React from 'react';
import TodosContext from './../../Context/todos';
import AuthContext from './../../Context/auth';
import todoApi from './../../Api/todos';
import { Button } from 'react-bootstrap';

class FormAddTodo extends React.Component {
    state = { text : '' }
    static contextType = TodosContext;



    formHandler(e) {
        e.preventDefault();
        // ajax
        if(this.state.text.length > 1) {
            let todo = { text : this.state.text , done : false };
            todoApi.post(`/todos.json` , todo)
                .then( response => this.context.dispatch({ type : 'add_todo' , payload : { todo : { ...todo , key : response.data.name }}}))
                .catch(err => console.log(err))
            this.setState({ text : '' })
        }
    }

    inputHandler(e) { this.setState({ text : e.target.value }) } 

    render() {
        return (
            <AuthContext.Consumer>
                { context => (
                    <>
                        {
                            context.authenticated
                            ? (
                                <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                                    <div className="form-group">
                                        <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={this.state.text} onChange={this.inputHandler.bind(this)}/>
                                        <Button type="submit" className="btn btn-primary" variant="flat">create</Button>
                                    </div>
                                </form>
                            )
                            : <p>Please <span style={{
                                                        color:'white',
                                                        border:'1px solid blue',
                                                        backgroundColor:'blue',
                                                        padding:'6px',
                                                        borderRadius:'4px'
                                                    }}>Login</span> to register your work</p>
                        }
                    </>
                )}
            </AuthContext.Consumer>
        )
    }
}
export default FormAddTodo;
