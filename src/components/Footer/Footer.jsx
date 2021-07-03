import React from 'react';
import {
  FooterMain,
  FooterContainer,
  FooterFirst,
  FooterLogo,
  FooterSecond,
  FooterThird,
  FooterUl,
  FooterUlTwo,
  FooterLiTwo,
  FooterLi,
  FooterLink,
  CopyRightArea,
  CopyRightText,
  FooterMainContainer,
} from './Footer.elements';
import footerLogo from '../../images/logo.png';

const Footer = () => {
  return (
    <FooterMain>
      <FooterMainContainer>
        <FooterContainer>
          <FooterFirst>
            <FooterLogo src={footerLogo} />
          </FooterFirst>
          <FooterSecond>
            <FooterUl>
              <FooterLi>
                <FooterLink to='#'>about online food</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink to='#'>read our blog</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink to='#'>sign up to delivery</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink to='#'>add your restaurant</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterSecond>
          <FooterThird>
            <FooterUl>
              <FooterLi>
                <FooterLink to='#'>get help</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink to='#'>Read FAQs</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink to='#'>view all cities</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink to='#'>restaurants nare me</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterThird>
        </FooterContainer>
        <CopyRightArea>
          <CopyRightText>Copyright &copy; 2021 Online food</CopyRightText>
          <FooterUlTwo>
            <FooterLiTwo>
              <FooterLink to='#'>privacy policy</FooterLink>
            </FooterLiTwo>
            <FooterLiTwo>
              <FooterLink to='#'>terms of use</FooterLink>
            </FooterLiTwo>
            <FooterLiTwo>
              <FooterLink to='#'>pricing</FooterLink>
            </FooterLiTwo>
          </FooterUlTwo>
        </CopyRightArea>
      </FooterMainContainer>
    </FooterMain>
  );
};

export default Footer;
