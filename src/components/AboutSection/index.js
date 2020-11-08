import React from 'react'
import { 
    AboutContainer, 
    AboutWrapper,
    AboutImage,
    Img,
    AboutInfo,
    AboutH,
    AboutDesc,
    AboutCard,
    Button
} from './AboutElements';
import Photo from '../../images/svg-3.svg';

const About = () => {
    return (
        <>
            <AboutContainer>
                <AboutWrapper>
                    <AboutImage>
                        <Img src={Photo} alt='Foto'/>
                    </AboutImage>
                    <AboutCard>
                        <AboutInfo>
                            <AboutH>
                                We are the 1st virtual bank in Germany!
                            </AboutH>
                            <AboutDesc>
                                Manage your money with one click away. With our plans you can easily access your accounts. See more about our plans and terms of services.
                            </AboutDesc>
                            
                        </AboutInfo>
                    </AboutCard>
                </AboutWrapper>  
            </AboutContainer>  
        </>
    )
}

export default About
