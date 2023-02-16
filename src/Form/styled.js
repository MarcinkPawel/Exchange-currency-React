import styled, { css } from "styled-components";

export const Main = styled.div`
    font-family: 'Roboto Mono', monospace;
    max-width: 600px;
    background-position: center;
    background-size: cover;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(63, 36, 36, 0.329);
    border-radius: 6px;
    
    @media(max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Legend = styled.legend`
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 6px;
    background-color: rgba(73, 73, 175, 0.397); 
`;

export const forLabel = css`
    font-size: 18px;
    font-weight: 700;  
    display: flex;
    flex-direction: row;
   
   
    
    @media(max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${select => select && css`
        padding: 10px;
        text-align: center;
        margin: 0 auto 0;

    `}

    ${text => text && css`
        text-align: center;
        
        
    `}
    ${center => center && css`
        justify-content: center;
    `}
`;

export const Label = styled.label`
    ${forLabel}

`;

export const Paragragh = styled.p`
    ${forLabel}
    padding-top: 20px;
`;

export const Span = styled.span`
    ${forLabel}
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    border: 1px solid black;
    width: 150px;
    align-self: center;

    @media(max-width: 767px) {
    max-width: 150px;
    }
`;

export const Select = styled.select`
    font-size: 18px;

    @media(max-width: 767px) {
        max-width: 70px;
        margin-top: 5px;
    }
`;

export const Submit = styled.button`
    align-self: center;
    font-size: 20px;
    background-color: rgba(73, 73, 175, 0.788);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px;
    margin: 15px;
    width: 200px;

    &:hover {
        background-color: white;
        color: rgba(73, 73, 175, 0.788);
    }
`;

export const ResultStyled = styled.div`
    height: 45px;
`;