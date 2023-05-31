import React from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MessageForm from "../compoments/MessageForm";

const Platform = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          style={{ height: "calc(100vh - 400px)" }}
        >
          <Grid item xs={12} className="center">
            <p className="title_large2">
              Create an exceptional payment product using TheQRPay's
              <br />
              <span style={{ color: "#CB2027" }}>
                cloud-based fintech platform
              </span>
              .
            </p>

            <p className="text_body_medium mt40">
              Build a cost-effective cloud-based SaaS solution for your
              customers, boosting revenue and loyalty with a customer-centric
              experience using our platform. You can skip the initial
              development stage and rely on our transactional core for your
              finance product's foundation. Simply customize our ledger layer
              solution and add your unique touch.
            </p>

            <div className="center mt50">
              <Button
                variant="contained"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="contained_buttton"
                disableElevation
              >
                Get a cot code
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className="section_style">
          <Grid item xs={6}>
            <p className="title_semibold_medium mb12">
              Develop and trust in the pro
              <br /> payment TheQRPay
            </p>
            <p className="text_body_medium mb40">
              By using a powerful and reliable layer of ledger software
              developed by a team of experienced financial technology experts as
              a starting point, you can build a successful product.
            </p>

            <ul className="text_body_medium">
              <li>
                Cloud-based backend application that includes an API layer.
              </li>
              <li>Customer front-office UI bundle with customizability.</li>
              <li>Team back-office UI package that is customizable</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img src="/images/relax.svg" alt="" className="right_image_style" />
          </Grid>
        </Grid>

        <div className="section_style">
          <p className="title_semibold_medium center">
            Take advantage of the technology designed for developers
          </p>
          <p className="text_body_medium center mt10">
            By utilizing TheQRPay's financial platform, your development team
            will have a solid base upon which to grow, easy integrations, and
            the ability to concentrate on improving user and product
            experiences.
          </p>
          <div className="card_holder">
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/api.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">API-first approach</p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Stack.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Innovative stack
                    <br /> technology
                  </p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Adjustable.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Adjustable & strong infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Security.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Design with security
                  </p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Pazzel.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Flexible CI/CD</p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Tolerance.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Fault tolerance
                    <br /> capability
                  </p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Design.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Design with security
                  </p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="circle_img_holder">
                  <img src="/images/Design.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Design with security
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="center">
            <Button
              variant="contained"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="contained_buttton"
              disableElevation
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="section_style">
          <p className="title_semibold_medium center">
            Discover the main capabilities of the platform
          </p>
          <p className="text_body_medium center mt10">
            Take a look at the platform features and internal tools to customize
            essential payment product operations and
            <br /> services to fit your requirements.
          </p>
          <div className="card_holder">
            <div className="card2">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Verification.svg" alt="" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6">Customer</p>
                  <ul
                    className="text_body_small_regular"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Both Merchants and individuals</li>
                    <li className="mb6">Registration by oneself</li>
                    <li className="mb6">Two-step authentication</li>
                    <li className="mb6">Upload KYC documents</li>
                    <li className="mb6">
                      Welcoming and familiarizing a new customer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Wallet-manage.svg" alt="" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6">Account</p>
                  <ul
                    className="text_body_small_regular"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Support for multiple currencies</li>
                    <li className="mb6">Ability to create accounts</li>
                    <li className="mb6">Display of account balances</li>
                    <li className="mb6">Access to transaction history</li>
                    <li className="mb6">
                      Account management options such as blocking/unblocking and
                      closure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Cradit-transfer.svg" alt="" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6">Transactions</p>
                  <ul
                    className="text_body_small_regular"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">P2P money transfer</li>
                    <li className="mb6">Payment processing</li>
                    <li className="mb6">Issuing and processing invoices</li>
                    <li className="mb6">Depositing and withdrawing funds</li>
                    <li className="mb6">Currency conversion</li>
                    <li className="mb6">Generating and redeeming vouchers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card2">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Team.svg" alt="" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6">Administration</p>
                  <ul
                    className="text_body_small_regular"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Management of customers</li>
                    <li className="mb6">Tracking of transactions</li>
                    <li className="mb6">Monitoring of activity logs</li>
                    <li className="mb6">Oversight of user management</li>
                    <li className="mb6">Control of currency management</li>
                    <li className="mb6">Management of fees and limits</li>
                    <li className="mb6">Administration of KYC processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="center">
            <Button
              variant="contained"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="contained_buttton"
              disableElevation
            >
              Learn More
            </Button>
          </div>
        </div>
        <Container maxWidth="lg">
          <div className="card4 section_style">
            <Grid container alignItems="center" style={{ minHeight: "320px" }}>
              <Grid item xs={7}>
                <div style={{ marginLeft: "50px" }}>
                  <p className="title_semibold_medium">
                    Got a brilliant fintech product idea?
                    <br />
                    <span style={{ color: "#CB2027" }}>
                      Let's talk it over!
                    </span>
                  </p>
                  <Button
                    variant="contained"
                    color="error"
                    endIcon={<ArrowForwardIcon />}
                    className="contained_buttton_square mt40"
                    disableElevation
                  >
                    Learn More
                  </Button>
                </div>
              </Grid>
              <Grid item xs={5} style={{ textAlign: "right" }}>
                {/* <img src="/images/Boy.svg" alt="" /> */}
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
                maintenance expenses. Get the perfect foundation for your
                payment product today!
              </p>

              <p className="subtitle_bold mb12">How can it help me?</p>

              <ul className="text_body_medium">
                <li>
                  Enjoy effortless payments with theqrpay.com - we take care of
                  all the maintenance.
                </li>
                <li>Our team hosts and manages your database on our server.</li>
                <li>
                  Our team designs and integrates the necessary providers.
                </li>
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
                <div>
                  <div className="circle_img_holder">
                    <img src="/images/Wallet.svg" alt="" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Digital wallet</p>
                    <p className="text_body_small_regular">
                      Flexible and scalable ledger layer software to build a
                      standalone digital wallet on top or add electronic
                      asset...
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
                <div>
                  <div className="circle_img_holder">
                    <img src="/images/Wallet-manage.svg" alt="" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Money transfer</p>
                    <p className="text_body_small_regular">
                      Flexible and scalable ledger layer software to build a
                      standalone digital wallet on top or add electronic
                      asset...
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
                <div>
                  <div className="circle_img_holder">
                    <img src="/images/Wallet-Mobile.svg" alt="" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Mobile wallet</p>
                    <p className="text_body_small_regular">
                      Flexible and scalable ledger layer software to build a
                      standalone digital wallet on top or add electronic
                      asset...
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
                <div>
                  <div className="circle_img_holder">
                    <img src="/images/Verification.svg" alt="" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> General ledger</p>
                    <p className="text_body_small_regular">
                      Flexible and scalable ledger layer software to build a
                      standalone digital wallet on top or add electronic
                      asset...
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
                development, we facilitate our clients in partnering with
                reliable fintech development companies. These companies have
                extensive expertise in fintech and are well acquainted with
                TheQRPay platform to create customized solutions and integrate
                third-party services. We can address all of your product
                requirements through these partnerships.
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
              The team focuses on building the transactional engine, the
              essential component of the platform, and avoids getting distracted
              by other aspects like mobile apps and frontend design. Their goal
              is to provide a strong foundation for fintech products that can
              handle an influx of users and transactions while allowing for
              flexibility and innovation.
            </p>
            <div className="card_holder">
              <div className="card3">
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
              <div className="card3">
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
              <div className="card3">
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Flexible.svg" alt="" />
                  </div>
                </div>
                <div className="card3_right">
                  <p className="title_semibold_small mb6"> Flexible delivery</p>
                  <p className="text_body_small_regular">
                    For a speedy launch, start with a hybrid cloud-based model
                    and switch at any time to an on-premise source code version.
                  </p>
                </div>
              </div>
              <div className="card3">
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
                    Develop a reliable engine that can sustain the growing
                    volume of transactions and never have to look under the
                    hood.
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
                  cash-in payment kiosks into a comprehensive payment
                  application by incorporating TheQRPay software and developing
                  on top of it.
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
                <img
                  src="/images/php.svg"
                  alt=""
                  className="right_image_style"
                />
              </Grid>
            </Grid>
          </div>

          <div className="section_style">
            <p className="title_semibold_medium center">
              Simplify the development of your fintech product
            </p>
            <p className="text_body_medium center mt10">
              Our objective is to deliver a dependable and potent base for
              fintech products that can accommodate a surge in users and
              transactions while providing flexibility for innovation.
            </p>
            <Grid container alignItems="center" style={{ marginTop: "80px" }}>
              <Grid item xs={6}>
                {" "}
                <img
                  src="/images/Flow.svg"
                  alt=""
                  className="left_image_style"
                />
              </Grid>
              <Grid item xs={6}>
                <div className="card3 mb24">
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
                <div className="card3 mb24">
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
                <div className="card3 mb24">
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
          <MessageForm />
        </Container>
        <div className="section_style">
          <p className="title_semibold_medium center">
            You can create your own digital financial system using
            <br /> TheQRPay's ledger software
          </p>
          <p className="text_body_medium center mt10">
            To meet the financial requirements of your customers and comply with
            regulations, use our fintech ledger platform as a strong foundation
            to build a personalized remittance system. In fintech, there is no
            universal solution that fits all.
          </p>
        </div>
        <div className="section_style">
          <p className="title_semibold_medium center">
            Bring new users on board & build
            <br /> long-term relationships
          </p>

          <div className="card_holder">
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Verification.svg" alt="" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6">
                  Monitor the KYC procedure
                </p>
                <p className="text_body_small_regular">
                  Gather the KYC information, save it in the system, and
                  integrate it with the chosen KYC tool to allow you to approve
                  or reject customer applications based on the information you
                  supply.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Team.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6">
                  {" "}
                  Knowing your consumer’s specifics
                </p>
                <p className="text_body_small_regular">
                  View every aspect of every customer's profile, including their
                  accounts, activity log, personal information and documents,
                  transactions, and statuses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <p className="title_semibold_medium center">
            Include the features for the best possible
            <br />
            customer experience
          </p>

          <div className="card_holder">
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Money-transfer.svg" alt="" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6">Payments</p>
                <p className="text_body_small_regular">
                  Use an API to integrate with third-party suppliers and offer
                  card payments as well as bank payments using IBAN and SWIFT.
                  Adapt to various consumer categories to boost your turnover.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Cradit-transfer.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Money transfer</p>
                <p className="text_body_small_regular">
                  From internal P2P transfers that are available right out of
                  the box to cross-border remittances via integration with
                  payment- and service providers, let your customers send and
                  receive money quickly and easily.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Payment-Slip.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6">
                  {" "}
                  Templates & bill payments
                </p>
                <p className="text_body_small_regular">
                  Help people save time with convenient payment templates
                  available through API interaction with the local vendors for
                  everything from utility bills to cell top-ups and other
                  payments.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Tracking-Finding.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Tracking expenses</p>
                <p className="text_body_small_regular">
                  Help consumers keep track of their spending with expense
                  graphs and charts, and for added convenience, offer to display
                  transactions on a map.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Cloud-connection.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Multiple Currencies</p>
                <p className="text_body_small_regular">
                  Create as many currencies as you like within the system. Allow
                  users to manage any assets, including diamonds, reward points,
                  and fiat money.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Currency-Exchange.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Exchange Currency</p>
                <p className="text_body_small_regular">
                  Offer choices for currency buying and selling, as well as
                  smooth currency exchange between customer accounts within the
                  system (according to the pre-configured exchange rate).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <p className="title_semibold_medium center">
            Generate revenue from your payment product
          </p>
          <p className="text_body_medium center mt10">
            Your one location for handling customer price agreements, provider
            contracts, and payment gateway agreements. Utilize every chance you
            have to increase your revenue and provide value to clients.
          </p>

          <div className="card_holder">
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Card-manage.svg" alt="" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6">Payment portals</p>
                <p className="text_body_small_regular">
                  Organize gateways and operations, set commissions and
                  restrictions for every operation, momentarily turn off a
                  gateway or its associated operation, and add new operations to
                  the list.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Managed.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Internal employees</p>
                <p className="text_body_small_regular">
                  Internal processes including P2P transfers, withdrawals,
                  top-ups, voucher production, monthly fees, cash desk charges,
                  etc. can be activated or deactivated.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Stack.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Service companies</p>
                <p className="text_body_small_regular">
                  Manage providers and services, set fees and limitations for a
                  variety of factors, create new services, or temporarily
                  disable existing ones.
                </p>
              </div>
            </div>
            <div className="card3">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Contacts-Paper.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6"> Contacts</p>
                <p className="text_body_small_regular">
                  Generate fresh contracts by merging particular regulations for
                  transaction types, commission fees, and limits. Obtain
                  comprehensive information about existing contracts, fees,
                  limits for providers, payment gateways & currency exchange
                  rates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={6}>
            {" "}
            <img
              src="/images/Illustration.svg"
              alt=""
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={6}>
            <p className="title_semibold_medium mb12">
              Cloud hybridization for simpler
              <br /> compliance
            </p>
            <p className="text_body_medium mb40">
              Many cloud payment software solutions face challenges with
              regulatory compliance, but TheQRPay overcomes these via a hybrid
              cloud delivery approach.
            </p>

            <ul className="text_body_medium">
              <li>
                Our staff updates the TheQRPay backend app, which is stored on
                the servers of the main cloud providers.
              </li>
              <li>
                To guarantee data security and conformity with data
                location-related rules, your database is kept on your servers.
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={6}>
            <p className="title_semibold_medium mb40">
              Achieve a quicker launch at a <br />
              significantly reduced cost
            </p>
            <p className="text_body_medium mb40">
              Confused between costly, market-ready software and time-consuming
              internal development? Our platform's SaaS approach allows it to
              achieve the ideal balance. You reduce the infrastructure,
              maintenance, and development costs for the fintech product, and
              you significantly accelerate the delivery date.
            </p>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img
              src="/images/Developer2.svg"
              alt=""
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <MessageForm />
      </Container>
    </div>
  );
};

export default Platform;
