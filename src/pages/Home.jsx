import React, { useEffect } from "react";
import "../App.css";
import { Button, Container, Grid, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MessageForm from "../compoments/MessageForm";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          style={{ height: "calc(100vh - 65px)" }}
        >
          <Grid item xs={6}>
            <p className="title_large mb24">
              Build a powerful,
              <br /> white-label <br />
              <span style={{ color: "#CB2027" }}>payments platform</span>.
            </p>

            <p className="text_body_medium" style={{ maxWidth: "500px" }}>
              Our API-driven SaaS platform is a revolutionary way to build
              digital banking and payment products quickly, without hefty
              upfront investments, saving time and accelerating release.
            </p>
          </Grid>
          <Grid item xs={6}>
            <img
              src="/images/home-bg.png"
              alt=""
              style={{
                height: "calc(100vh - 65px)",
                display: "block",
                margin: "auto",
              }}
            />
            {/* <div style={{ position: "relative", maxWidth: "100%" }}>
              <img src="/images/home-circle.svg" alt="" width="100%" />
              <img
                src="/images/hand.png"
                alt=""
            
                style={{ position: "absolute" }}
              />
            </div> */}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <div className="card1 section_style">
          <Grid container alignItems="center">
            <Grid item xs={9}>
              <div style={{ marginLeft: "50px" }}>
                <p className="title_semibold_medium">
                  Solutions tailored to fit any{" "}
                  <span style={{ color: "#CB2027" }}>business size</span>.
                </p>
                <p className="text_body_medium" style={{ maxWidth: "665px" }}>
                  theqrpay.com gives you a reliable payments platform with a
                  range of features and functions to help you launch your
                  payment business quickly. Get your financial product up and
                  running quickly with our SaaS or source code version.
                </p>
              </div>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "right" }}>
              <img src="/images/tree01.svg" alt="" />
            </Grid>
          </Grid>
        </div>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={6}>
            <p className="title_semibold_medium mb12">
              SaaS hybrid cloud solution
            </p>
            <p className="text_body_medium mb40">
              Discover a cost-effective subscription-based solution for your
              digital payment product without large upfront costs. Explore the
              financial market with no commitment, test the demand before
              creating a full-fledged product, and reduce development and
              maintenance expenses. Get the perfect foundation for your payment
              product today!
            </p>

            <p className="subtitle_bold mb12">How can it help me?</p>

            <ul className="text_body_medium">
              <li>
                Enjoy effortless payments with theqrpay.com - we take care of
                all the maintenance.
              </li>
              <li>Our team hosts and manages your database on our server.</li>
              <li>Our team designs and integrates the necessary providers.</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img
              src="/images/saas-vector.svg"
              alt=""
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={6}>
            {" "}
            <img src="/images/left.svg" alt="" className="left_image_style" />
          </Grid>
          <Grid item xs={6}>
            <p className="title_semibold_medium mb12">
              Unlock the power of your source code with a license - easy and
              attractive
            </p>
            <p className="text_body_medium mb40">
              Take charge of your financial operations with the theqrpay.com
              ledger layer platform. Get the source code license and enjoy
              customizations without expensive SaaS fees as your transaction
              volume increases.
            </p>

            <p className="subtitle_bold mb12">How can it help me?</p>

            <ul className="text_body_medium">
              <li>Technical assessment of the product by our team.</li>
              <li>
                We will ensure a successful knowledge transfer to your team.
              </li>
              <li>Signing the agreement and transferring the code.</li>
            </ul>
            <Button
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton mt40"
              disableElevation
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
        <div className="section_style">
          <p className="title_semibold_medium center">
            Our fintech products are backed by a strong foundation
          </p>
          <p className="text_body_medium center mt10">
            TheQRPay is a reliable foundation for digital payment solutions.
            It's secure, straightforward and confident. Enjoy a seamless
            <br /> payment experience with TheQRPay!
          </p>
          <div className="card_holder">
            <div className="card2">
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Digital wallet</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2">
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet-manage.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Money transfer</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2">
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet-Mobile.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Mobile wallet</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2">
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Verification.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> General ledger</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <p
            className="subtitle_bold center"
            style={{
              color: "#303030",
              marginBottom: "16px",
            }}
          >
            Have you thought any other fintech application in mind?
          </p>
          <div className="center">
            <Button
              variant="contained"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="contained_buttton"
              disableElevation
            >
              Add Product's
            </Button>
          </div>
        </div>

        <Grid container alignItems="center" className="section_style">
          <Grid item xs={6}>
            <p className="title_semibold_medium mb40">
              Fintech software development
              <br /> services
            </p>
            <p className="text_body_medium mb40">
              Although our fintech proficiency lies mainly in back-end
              development, we facilitate our clients in partnering with reliable
              fintech development companies. These companies have extensive
              expertise in fintech and are well acquainted with TheQRPay
              platform to create customized solutions and integrate third-party
              services. We can address all of your product requirements through
              these partnerships.
            </p>
            <Button
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Learn More
            </Button>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img
              src="/images/saas-vector.svg"
              alt=""
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <div className="section_style">
          <p className="title_semibold_medium center">Why TheQRPay?</p>
          <p className="text_body_medium center mt10">
            The team focuses on building the transactional engine, the essential
            component of the platform, and avoids getting distracted by other
            aspects like mobile apps and frontend design. Their goal is to
            provide a strong foundation for fintech products that can handle an
            influx of users and transactions while allowing for flexibility and
            innovation.
          </p>
          <div className="card_holder">
            <div className="card3 card_shadow">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Launch.svg" alt="" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6">
                  {" "}
                  Accelerated time-to-market
                </p>
                <p className="text_body_small_regular">
                  An efficient fintech engine created using cutting-edge
                  technologies can save development time by at least 1 year.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Pazzel.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6">
                  {" "}
                  API-driven architecture
                </p>
                <p className="text_body_small_regular">
                  Utilize 400+ RESTful API endpoints for easy infrastructure
                  integration and unrivaled client service.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Flexible.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Flexible delivery</p>
                <p className="text_body_small_regular">
                  For a speedy launch, start with a hybrid cloud-based model and
                  switch at any time to an on-premise source code version.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/api.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6">
                  {" "}
                  High performance transactions
                </p>
                <p className="text_body_small_regular">
                  Develop a reliable engine that can sustain the growing volume
                  of transactions and never have to look under the hood.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <p className="title_semibold_medium center">
            Real-world applications of TheQRPay
            <br />
            software in business operations
          </p>
          <p className="text_body_medium center mt10">
            Take a look at our case studies to witness the extensive potential
            of TheQRPay's white label payment software
            <br /> solution and how it has been a game-changer for our clients
            in the fintech sector.
          </p>
          <Grid container alignItems="center" className="section_style">
            <Grid item xs={6}>
              {" "}
              <img
                src="/images/Developer.svg"
                alt=""
                className="left_image_style"
              />
            </Grid>
            <Grid item xs={6}>
              <p className="title_semibold_medium mb12">
                MPAY develops an e-wallet and payment application utilizing
                TheQRPay software
              </p>
              <p className="text_body_medium mb40">
                Learn how MPAY accomplished the transformation of a network of
                cash-in payment kiosks into a comprehensive payment application
                by incorporating TheQRPay software and developing on top of it.
              </p>

              <Button
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Explore
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" className="section_style">
            <Grid item xs={6}>
              <p className="title_semibold_medium mb40">
                A top PSP in MENA overhauls its
                <br /> transaction accounting system
              </p>
              <p className="text_body_medium mb40">
                Discover how a prominent payment service provider (NDA) from a
                MENA country revolutionized its central transaction accounting
                system by integrating TheQRPay's on-premise ledger layer
                software with its current POS software.
              </p>
              <Button
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Explore
              </Button>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <img src="/images/php.svg" alt="" className="right_image_style" />
            </Grid>
          </Grid>
        </div>

        <div className="section_style">
          <p className="title_semibold_medium center">
            Simplify the development of your fintech product
          </p>
          <p className="text_body_medium center mt10">
            Our objective is to deliver a dependable and potent base for fintech
            products that can accommodate a surge in users and transactions
            while providing flexibility for innovation.
          </p>
          <Grid container alignItems="center" style={{ marginTop: "80px" }}>
            <Grid item xs={6}>
              {" "}
              <img src="/images/Flow.svg" alt="" className="left_image_style" />
            </Grid>
            <Grid item xs={6}>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center" }}
              >
                <img src="/images/arrow.svg" alt="" className="arrow_style" />
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Airplane.svg" alt="" />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular">
                    Contact us with your product idea.
                  </p>
                </div>
              </div>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center" }}
              >
                <img src="/images/arrow.svg" alt="" className="arrow_style" />
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Cloud-instance.svg" alt="" />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular">
                    Acquire your cloud instance or the source code of the
                    software.
                  </p>
                </div>
              </div>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center" }}
              >
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Launch.svg" alt="" />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular">
                    Personalize and prepare for launch.
                  </p>
                </div>
              </div>

              <Button
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton mt40"
                disableElevation
              >
                Lets work together
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* <MessageForm /> */}
      </Container>
    </div>
  );
};

export default Home;
