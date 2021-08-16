import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Navigation = styled.nav`
  width: 100vw;
  padding: 2em 0;
  display: inline-block;
  background: #fafafa;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-weight: 700;
    }

    .wallet-btn {
      .fas {
        margin-right: 0.9em;
        font-size: 0.78em;
      }

      * {
        text-transform: none !important;
      }
    }

    @media only screen and (max-width: 425px) {
      flex-direction: column;
      align-items: flex-start;

      .wallet-btn {
        margin-top: 1em;
      }
    }
  }
`;

interface TopBarProps {
  logoText: string;
}

const TopBar: React.FC<TopBarProps> = ({ logoText }) => {
  return (
    <Navigation>
      <Container className="container" fixed>
        <span className="logo">{logoText}</span>
        <div className="wallet-btn">
          <Button variant="outlined" color="primary" href="#">
            <i className="fas fa-wallet"></i>
            Connect Wallet
          </Button>
        </div>
      </Container>
    </Navigation>
  );
};

export default TopBar;
