import styled from "styled-components";

const Button2 = styled.button`
    /* display: inline-block; */
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    display: block;
`;

const TomatoButton = styled(Button2)`
    color: tomato;
    border-color: tomato;
`;

const Button3 = styled.button`
    display: inline-block;
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid tomato;
    border-radius: 3px;
    display: block;
`;

const ReserveButton = (props) => (
    <Button3 children={props.children.split("").reverse()} />
);

export { Button2, TomatoButton, Button3, ReserveButton };
