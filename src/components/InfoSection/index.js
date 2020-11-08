import React from 'react'
import {
    Column2, 
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    Img,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
} from './InfoElements';
import {Button} from '../ButtonElement';
import Photo from '../../images/svg-2.svg';

const InfoSection = (
    {
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        headLine,
        darkText,
        description,
        buttonLabel,
        img,
        alt
    }
) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' className='btn-info-section'>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Photo} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
