import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { Provider } from 'react-redux';
import store from '../../store/reduxStore'

export default function ReduxDemo() {
    return (
        <div>
            <h3 className='text-center'>Redux works !!!</h3>
            <p>
                It is a pattern and library for managing and updating application state, using events called actions.
                It is a centralized store where we store our application state and we can use these states across our entire application.
            </p>
            <Provider store={store}>
                <TodoForm />
                <Todo />
            </Provider>
        </div>
    )
}
