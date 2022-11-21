import './textInput.css'

function TextInput({todoRed}) {
    return (
        <input className='text-input' placeholder='Add item' ref={todoRed} type='text' />
    )
}

export default TextInput