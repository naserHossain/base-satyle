import React from "react";
import styled from "styled-components";
import { Button2, TomatoButton, ReserveButton } from "./Button";

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

const Button1 = styled.button`
    color: #bf4f74;
    font-size: 1rem;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid;
    border-radius: 3px;
    cursor: ${(props) => (props.handy ? "pointer" : "alias")};
`;

const TomatoButton1 = styled(Button1)`
    color: tomato;
    border: 2px solid;
`;

const App = () => {
    return (
        <div>
            <h2> Hello from App</h2>
            <BaseButton dark="false" size="sm">
                Click me
            </BaseButton>
            <PrimaryButton size="sm">Hello BTN</PrimaryButton>

            <Button1 handy>last button</Button1>

            <TomatoButton1 handy>Tomato</TomatoButton1>
            <Button2>Normal button</Button2>

            <Button2 as="a" href="#">
                Link with button styles
            </Button2>

            <TomatoButton as="a" href="#">
                Link with tomato button
            </TomatoButton>

            <ReserveButton> Hello reserve button </ReserveButton>
        </div>
    );
};

export default App;
