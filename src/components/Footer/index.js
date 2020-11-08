import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    SocialMedia,
    Location,
    Time
} from './FooterElements';

const Footer = () => {
    return (
        <>
          <FooterContainer>
                <FooterWrapper>
                    <SocialMedia>
                        <div className="flex-center">
                            <i className="fa fa-github fa-4x icon-3d"></i>
                            <i className="fa fa-gitlab fa-4x icon-3d"></i>
                            <i className="fa fa-bitbucket fa-4x icon-3d"></i>
                            <i className="fa fa-git fa-4x icon-3d"></i>
                            </div>

                            <div className="flex-center">
                            <i className="fa fa-twitter fa-4x icon-3d"></i>
                            <i className="fa fa-facebook fa-4x icon-3d"></i>
                            <i className="fa fa-instagram fa-4x icon-3d"></i>
                            <i className="fa fa-whatsapp fa-4x icon-3d"></i>
                        </div>
                    </SocialMedia>
                    <Location>
                        Am Hof <br>
                        </br>
                        53115, Bonn <br></br>
                        Deutschland
                    </Location>
                    <Time>
                        We are here 24/7 just for you. Let us know. Contact us in our social media and share our profile.
                    </Time>
                </FooterWrapper>
          </FooterContainer>
        </>
    )
}

export default Footer;
