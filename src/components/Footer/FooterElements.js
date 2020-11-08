import styled from "styled-components";

export const FooterContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 300px;
    position: relative;
    z-index: 1;
    color: #fff;
`;

export const FooterWrapper = styled.div `
    display: flex;
    z-index: 1;
    height: 450px;
    width: 70%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: -30px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const SocialMedia = styled.div `
    width: 30%;
    margin-right: 50px;
`;

export const Location = styled.div `
    width: 20%;
    color: #01BF71;
`;

export const Time = styled.div `
    width: 60%;
:`