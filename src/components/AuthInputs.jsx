import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button.jsx";
import CustomInput from "./Input.jsx"; // import Input from "./Input" is also allowed as this is default export

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlsContainer>
        <CustomInput
          invalid={emailNotValid}
          label="Email"
          inputType="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomInput
          invalid={passwordNotValid}
          label="Password"
          inputType="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlsContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
