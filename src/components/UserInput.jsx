import './UserInput.css';
import InputField from './InputField';

function UserInput({ userInputs, onInputChange }) {
  return (
    <section className="userInput">
      <div className="inputGroup">
        <InputField
          label="Initial Investment"
          value={userInputs.initialInvestment}
          onChange={(value) => onInputChange('initialInvestment', value)}
        />
        <InputField
          label="Annual Investment"
          value={userInputs.annualInvestment}
          onChange={(value) => onInputChange('annualInvestment', value)}
        />
      </div>
      <div className="inputGroup">
        <InputField
          label="Expected Return"
          value={userInputs.expectedReturn}
          onChange={(value) => onInputChange('expectedReturn', value)}
        />
        <InputField
          label="Duration"
          value={userInputs.duration}
          onChange={(value) => onInputChange('duration', value)}
        />
      </div>
    </section>
  );
}

export default UserInput;
