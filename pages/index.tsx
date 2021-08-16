import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// npm packages
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// Custom components
import TopBar from "../components/TopBar/TopBar";
import Slideshow from "../components/Slideshow/Slideshow";

const TitlesBlock = styled.div`
  h1 {
    max-width: 600px;
    font-size: 3rem;
    line-height: 1.2;
  }

  p.subtitle {
    font-size: 1.2rem;
    max-width: 390px;
    margin-top: -1em;
  }

  .buy-btn {
    text-transform: none;
  }
`;

const Hero = styled.main`
  min-height: 87vh;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const images = [
  "/slideshow/1.png",
  "/slideshow/2.png",
  "/slideshow/3.png",
  "/slideshow/4.png",
  "/slideshow/5.png",
  "/slideshow/6.png",
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing page</title>
        <meta name="description" content="" />
      </Head>

      <TopBar logoText="CompanyName" />

      <Hero>
        <Container className="container" fixed>
          <TitlesBlock>
            <h1>Your Landing page name</h1>
            <p className="subtitle">
              Here is some text that provides additional information about the
              landing page itself.
            </p>
            <Button
              className="buy-btn"
              variant="contained"
              color="primary"
              href="#"
            >
              Buy right now
            </Button>
          </TitlesBlock>
          <Slideshow images={images} interval={1} />
        </Container>
      </Hero>
    </div>
  );
};

export default Home;
