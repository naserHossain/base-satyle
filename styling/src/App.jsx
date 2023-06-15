import React from "react";
import styled from "styled-components";

const fontSizes = {
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
};

const BaseButton = styled.button`
    border: none;
    border-radius: 0.15rem;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
`;

const PrimaryButton = styled(BaseButton)`
    background: red;
    color: white;
    margin: 1rem;
`;

const Button = styled.button`
    color: #bf4f74;
    font-size: 1rem;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px;
    border-radius: 3px;
    cursor: ${(props) => (props.handy ? "pointer" : "alias")};
`;

const App = () => {
    return (
        <div>
            <h2> Hello from App</h2>
            <BaseButton dark={false} size="sm">
                Click me
            </BaseButton>
            <PrimaryButton size="lg">Hello BTN</PrimaryButton>

            <Button handy={false}>last button</Button>
        </div>
    );
};

export default App;
