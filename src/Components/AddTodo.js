import React from 'react'

const AddTodo = (props) => {
    return ( 
        <section>
            <input type="checkbox" name='' checked={props.isCompleteNewTodo}className='checkbox' id='' onChange={props.handleNewTodoCheckbox}/>
            <input type="text" name='' className='todo' id='' onChange={props.handleNewTodo}/>
            <button type='submit' onClick={props.handleSubmit} className='SubmitBtn'>Add</button>
        </section>
     );
}

export default AddTodo ;