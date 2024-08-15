function InputField({ label, value, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <p className="inputField">
      <label>{label}</label>
      <input type="number" value={value} onChange={handleChange} required />
    </p>
  );
}

export default InputField;
