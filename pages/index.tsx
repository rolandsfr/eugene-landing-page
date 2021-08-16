// Required imports
import type { NextPage } from "next";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";

// npm packages
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// Custom components
import NavigationBar from "../components/Navigation/Navigation";
import Slideshow from "../components/Slideshow/Slideshow";
import Table from "../components/Table/Table";
import Footer from "../components/Navigation/Footer";

// utils
import { createTableData } from "../utils/utils";

// Main/biggest components (styled ones) of the page

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
    margin-bottom: -0.5em;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2em;

    h2 {
      margin-top: -1.7em;
      margin-bottom: -1em;
    }
  }
`;

// relative paths to the images that are going to be switched through inside of the Slideshow component
// paths are relative to the directory /public
const images = [
  "/slideshow/1.png",
  "/slideshow/2.png",
  "/slideshow/3.png",
  "/slideshow/4.png",
  "/slideshow/5.png",
  "/slideshow/6.png",
];

// Use helper function createTableData to create appropriate objects to pass over to the Table component (data prop)
// All elementary values have to be of the string type
const data_1 = createTableData({
  // Head values
  headValues: ["Name", "Number", "Percentage"],

  // Body values, order has to match with headValues order
  bodyValues: [
    ["Ginger", "417", "(20.85%)"],
    ["White ", "403", "(20.15%)"],
    ["Black  ", "395", "(19.75%)"],
    ["Blue", "395", "(19.75%)"],
    ["Cream", "331", "(16.55%)"],
  ],

  // Title of the Table, is displayed above the table itself
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

      {/* logoText props expects a string type that will display that string in the top left corner of the site (logo element of sorts)*/}
      <NavigationBar logoText="CompanyName" />

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

          {/* For the images prop pass the array of images specified earlier */}
          {/* For the interval prop pass amount of time (in seconds) to pass before Slideshow component displays switches an image */}
          <Slideshow images={images} interval={1} />
        </Container>
      </Hero>

      <TablesSection>
        <Container fixed>
          <h2>Data blah blah...</h2>
          <div className="tables">
            {/* For the data props pass a specific tableData object, created earlier with the help of helper function createTableData */}
            <Table data={data_1} />
            <Table data={data_2} />
          </div>
        </Container>
      </TablesSection>

      <Footer />
    </div>
  );
};

export default Home;
