import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Disney<span></span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Disney © 2023</p>
        </div>

        <div className="footer-center">
          <div className="fo_i">
            <div className="i_s">
              <FaMapMarkerAlt color="white" />
            </div>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div className="fo_i">
            <div className="i_s">
              <FaPhoneAlt color="white" />
            </div>
            <p>+1.555.555.5555</p>
          </div>

          <div className="fo_i">
            <div className="i_s">
              <FaEnvelope color="white" />
            </div>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
    // <Box>
    //   <h1 style={{ color: "green",
    //                textAlign: "center",
    //                marginTop: "-50px" }}>
    //   </h1>
    //   <Container>
    //     <Row>
    //       <Column>
    //         <Heading>Notre Site</Heading>
    //         <FooterLink href="/">Boutique</FooterLink>
    //         <FooterLink href="/login">Mon Compte</FooterLink>
    //         <FooterLink href="/about">About</FooterLink>
    //       </Column>
    //       <Column>
    //         <Heading>Information  lègales</Heading>
    //         <FooterLink href="/mention">Mentions légales</FooterLink>
    //         <FooterLink href="/cgv">CGV</FooterLink>
    //         <FooterLink href="/faq">FAQ</FooterLink>
    //       </Column>

    //       <Column>
    //         <Heading>Social Media</Heading>
    //         <FooterLink href="#">
    //           <i className="fab fa-facebook-f">
    //             <span style={{ marginLeft: "10px" }}>
    //               Facebook
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="#">
    //           <i className="fab fa-instagram">
    //             <span style={{ marginLeft: "10px" }}>
    //               Instagram
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="#">
    //           <i className="fab fa-twitter">
    //             <span style={{ marginLeft: "10px" }}>
    //               Twitter
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="#">
    //           <i className="fab fa-youtube">
    //             <span style={{ marginLeft: "10px" }}>
    //               Youtube
    //             </span>
    //           </i>
    //         </FooterLink>
    //       </Column>
    //     </Row>
    //   </Container>
    // </Box>
  );
};
export default Footer;
