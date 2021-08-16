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
import Table from "../components/Table/Table";

// utils
import { createTableData } from "../utils/utils";

const TitlesBlock = styled.div`
  margin-right: 4em;

  h1 {
    max-width: 500px;
    font-size: 3.5rem;
    line-height: 1.2;
    margin-top: 0;
  }

  p.subtitle {
    font-size: 1.2rem;
    max-width: 490px;
    margin-top: -0.5em;
    margin-bottom: 2em;
  }

  .buy-btn {
    text-transform: none;
  }

  @media only screen and (max-width: 959px) {
    margin-right: 1em;
  }

  @media only screen and (max-width: 768px) {
    margin: 2em 0;
    margin-bottom: 3em;

    p.subtitle {
      margin-top: 1em;
      margin-bottom: 2em;
    }
  }
`;

const Hero = styled.main`
  min-height: 87vh;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1024) {
      img {
        width: 250px;
        display: none;
      }
    }

    @media only screen and (max-width: 959px) {
      img {
        width: 250px;
      }

      h1 {
        font-size: 2rem;
      }

      p.subtitle {
        font-size: 1rem;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      img {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 424px) {
    min-height: 70vh;
  }
`;

const TablesSection = styled.section`
  background: #fafafa;
  padding: 5em 0;

  h2 {
    margin-top: -0.5em;
    margin-bottom: -.5em;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2em;

     h2 {
    margin-top: -1.7em;
    margin-bottom: -1em;
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

const data_1 = createTableData({
  headValues: ["Name", "Number", "Percentage"],
  bodyValues: [
    ["Ginger", "417", "(20.85%)"],
    ["White ", "403", "(20.15%)"],
    ["Black  ", "395", "(19.75%)"],
    ["Blue", "395", "(19.75%)"],
    ["Cream", "331", "(16.55%)"],
  ],
  tableTitle: "Coat color",
});

const data_2 = createTableData({
  headValues: ["Name", "Number", "Percentage"],
  bodyValues: [
    ["None", "1000", "(50%)"],
    ["Gloves", "808", "(40.4%)"],
    ["Basket", "192", "(9.6%)"],
  ],
  tableTitle: "Shoes",
});

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
            <h1>Your Landing page title</h1>
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

      <TablesSection>
        <Container fixed>
          <h2>Data blah blah...</h2>
          <div className="tables">
            <Table data={data_1} />
            <Table data={data_2} />
          </div>
        </Container>
      </TablesSection>
    </div>
  );
};

export default Home;
