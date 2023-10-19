import './InputField.css';

function InputField(props) {
    const { name, title, placeholder, value, onChange } = props
    
    return (
        <div className='input-field'>
            <label htmlFor={name}>{title}</label>
            <input type="text" placeholder={placeholder} id={name} name={name} value={value} onChange={onChange}/>
        </div>
    );
}

export default InputField;