import styled from "styled-components";

export const Main = styled.div`
    font-family: 'Roboto Mono', monospace;
    max-width: 800px;
    box-shadow: 10px 10px 38px -8px ${({ theme }) => theme.color.mirage};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.bonJour};
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
    color: ${({ theme }) => theme.color.mirage};
    align-self: center;
`;

export const Label = styled.label`
    font-size: 16px;  
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Span = styled.span`
    display: inline-block;
    margin-bottom: 15px;
    width: 150px;
    color: ${({ theme }) => theme.color.mirage};
`;

export const ExchangeSpan = styled.span`
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.mirage};
`;

export const TextSpan = styled.span`
    justify-self: center;
    font-size: 10px;
    margin-bottom: 10px;
    max-width: 500px;
    text-align: center;
    color: ${({ theme }) => theme.color.mirage};
`;

export const Input = styled.input`
    width: 300px;
    padding: 5px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.mirage};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 300px;
    }
`;

export const Select = styled.select`
    width: 313px;
    font-size: 16px;
    padding: 5px;
    color: ${({ theme }) => theme.color.mirage};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 313px;
    }
`;

export const SubmitButton = styled.button`
    justify-self: stretch;
    font-size: 20px;
    background-color: ${({ theme }) => theme.color.mirage};
    color: ${({ theme }) => theme.color.bonJour};
    border: none;
    border-radius: 6px;
    padding: 20px;
    margin: 10px;

    &:hover {
        background-color: white;
        color: ${({ theme }) => theme.color.mirage};
        background-color: ${({ theme }) => theme.color.mirageLight};
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