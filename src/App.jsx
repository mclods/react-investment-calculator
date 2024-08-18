import { useState } from 'react';
import classes from './App.module.css';
import UserInput from './components/UserInput';
import { calculateInvestmentResults } from './utils/investment';
import Results from './components/Results';

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  });

  const onInputChange = (inputField, newInputValue) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [inputField]: +newInputValue,
    }));
  };

  let investmentResults = [];
  const inputsAreValid =
    userInputs.initialInvestment &&
    userInputs.annualInvestment &&
    userInputs.expectedReturn &&
    userInputs.duration > 0;

  investmentResults = inputsAreValid && calculateInvestmentResults(userInputs);

  return (
    <main>
      <UserInput userInputs={userInputs} onInputChange={onInputChange} />
      {inputsAreValid ? (
        <Results records={investmentResults} />
      ) : (
        <p className={classes.center}>
          Please provide valid inputs and duration greater than zero.
        </p>
      )}
    </main>
  );
}

export default App;
