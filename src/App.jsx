import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifire, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifire]: +newValue,
      };
    });
  }

  let hasZeroValue = false;

  for (let key in userInput) {
    if (userInput[key] <= 0) {
      hasZeroValue = true;
      break;
    }
  }

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {hasZeroValue && (
        <p className="center">Please enter values greater than zero.</p>
      )}
      {!hasZeroValue && <Results userInput={userInput} />}
    </main>
  );
}

export default App;
