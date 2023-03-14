import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Notre Site</Heading>
            <FooterLink href="/">Boutique</FooterLink>
            <FooterLink href="/login">Mon Compte</FooterLink>
            <FooterLink href="/about">About</FooterLink>
          </Column>
          <Column>
            <Heading>Information  lègales</Heading>
            <FooterLink href="/mention">Mentions légales</FooterLink>
            <FooterLink href="/cgv">CGV</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </Column>
          
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;