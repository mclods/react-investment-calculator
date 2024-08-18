import classes from './InputField.module.css';

function InputField({ label, value, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <p className={classes.inputField}>
      <label>{label}</label>
      <input type="number" value={value} onChange={handleChange} required />
    </p>
  );
}

export default InputField;
