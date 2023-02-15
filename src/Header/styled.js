import styled, { css } from "styled-components";

export const HeaderStyle = css`
    padding: 15px;
    text-align: center;

    ${text => text && css`
        font-size: 18px;
        font-style: italic;
    `}
`;

export const Title = styled.header`
    ${HeaderStyle}
`;
export const TitleHeading = styled.h1`
    ${HeaderStyle}  
`;

export const TitleSubHeading = styled.h2`
    ${HeaderStyle}  
`;