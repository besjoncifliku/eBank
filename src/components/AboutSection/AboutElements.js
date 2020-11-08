import styled from 'styled-components';

export const AboutContainer = styled.div `
    color: #fff;
    background: #f9f9f9;
    padding-top: 50px;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const AboutWrapper = styled.div `
    display: flex;
    z-index: 1;
    height: 450px;
    width: 80%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

`;

export const AboutInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }

`;

export const AboutH = styled.h1 `
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #01BF71;

    @media screen and (max-width: 480px) {
        font-size: 16px;
        line-height: 0;
    }
`;

export const AboutDesc = styled.p `
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #111;
`;

export const AboutImage = styled.div `
    max-width: 455px;
    height: 100%;
    padding-right: 50px;
    margin-top: 65px;
`;

export const Img = styled.img `
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0px;

`;

export const AboutCard = styled.div `
    padding-left: 30px;
    text-align: right;
    @media screen and (max-width: 480px) {
        text-align: left;
    }
`;

