import styled, {css} from "styled-components";

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
    padding: 50px;
    border: 2px solid rgba(63, 36, 36, 0.329);
    border-radius: 6px;
    padding: 5px;
    margin: 10px; 
    
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
    width: 100%;
    margin: 10px 15px;
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
        padding-bottom: 10px;
        text-align: center;
        margin: 20px auto 0;
    `}

    ${text => text && css`
        display: inline-block;
        width: 160px;
    `}
`;

export const Label = styled.label`
    ${forLabel}
`;

export const Paragragh = styled.p`
    ${forLabel}
`;

export const Span = styled.span`
    ${forLabel}
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    border: 1px solid black;
    width: 150px;

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

export const Submit = styled.submit`
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