import './InputField.css';

function InputField(props) {
    const { name, title, placeholder } = props
    return (
        <div className='input-field'>
            <label for={name}>{title}</label>
            <input type="text" placeholder={placeholder} id={name} name={name}/>
        </div>
    );
}

export default InputField;