import React from 'react'
import { tsPropertySignature } from '@babel/types';

const TodoItem = (props) => {
    return ( 
        <article>
            <div>
                <input 
                    type='checkbox' 
                    name='' 
                    className='checkbox' 
                    checked={props.todo.isComplete} 
                    onChange={()=>props.handleCheckBox(props.todo.id)}
                />
                <label 
                    htmlFor='' 
                    className='todo'
                > 
                    {props.todo.todo} 
                </label>
                </div>
            <button 
                className='button' onClick={() => props.deleteItem(props.todo.id)}
            >
                &times;
            </button>
        </article>
     );
}
 
export default TodoItem;