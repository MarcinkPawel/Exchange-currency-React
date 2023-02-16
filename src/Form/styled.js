import styled, { css } from "styled-components";

export const Main = styled.div`
    font-family: 'Roboto Mono', monospace;
    max-width: 800px;
    box-shadow: 10px 10px 38px -8px rgb(18, 27, 40);
    border-radius: 20px;
    background-color: rgb(230, 227, 228);
    margin: 10px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    margin: 50px 
`;
export const Title = styled.h1`
    margin-bottom: 40px;
    color: rgb(18, 27, 40);
    align-self: center;
`;

export const Label = styled.label`
    font-size: 16px;  
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    @media(max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Span = styled.span`
    display: inline-block;
    margin-bottom: 15px;
    width: 150px;
`;

export const ExchangeSpan = styled.span`
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const TextSpan = styled.span`
    justify-self: center;
    font-size: 10px;
    margin-bottom: 10px;
    max-width: 500px;
    text-align: center;
`;

export const Input = styled.input`
    width: 300px;
    padding: 5px;
    font-size: 16px;

    @media(max-width: 767px) {
    max-width: 300px;
    }
`;

export const Select = styled.select`
    width: 313px;
    font-size: 16px;
    padding: 5px;

    @media(max-width: 767px) {
        max-width: 313px;
    }
`;

export const SubmitButton = styled.button`
    justify-self: stretch;
    font-size: 20px;
    background-color: rgb(18, 27, 40);
    color: rgb(230, 227, 228);
    border: none;
    border-radius: 6px;
    padding: 20px;
    margin: 10px;

    &:hover {
        background-color: white;
        color: rgb(18, 27, 40);
        background-color: rgba(18, 27, 40, 0.5);
        transition: 1s;
    }
`;

export const ResultStyled = styled.div`
    margin-top: 10px;
    align-self:  center;
    font-size: 18px;
    font-weight: 700;
    height: 24px;
`;