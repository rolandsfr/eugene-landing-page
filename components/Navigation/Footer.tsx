import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

const FooterEl = styled.footer`
  width: 100%;
  padding: 4em 0;
  background: #fff;

  h3:first-of-type {
    margin-top: 0em;
  }

  ul.social {
    margin: 0;
    padding: 0;
    font-size: 0;

    li {
      font-size: 1rem;
      list-style-type: none;
      margin-top: 1em;

      i {
        margin-right: 0.5em;
      }

      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      <Container fixed className="container">
        <h3>Social media & links</h3>
        <ul className="social">
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </Container>
    </FooterEl>
  );
};

export default Footer;
