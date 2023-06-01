import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MessageForm from "../compoments/MessageForm";

const Platform = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="cloud_bg">
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
        </Container>
      </div>
      <Container maxWidth="lg">
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
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/api.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">API-first approach</p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
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
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
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
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
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
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Pazzel.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Flexible CI/CD</p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
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
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
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
              <div class="triangle_left"></div>
              <div class="triangle_right"></div>
              <div className="card2_content">
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
            <div className="card2 card_shadow">
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
            <div className="card2 card_shadow">
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
            <div className="card2 card_shadow">
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
            <div className="card2 card_shadow">
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

        <div className="card4 section_style">
          <Grid container alignItems="center" style={{ minHeight: "320px" }}>
            <Grid item xs={7}>
              <div style={{ marginLeft: "50px" }}>
                <p className="title_semibold_medium">
                  Got a brilliant fintech product idea?
                  <br />
                  <span style={{ color: "#CB2027" }}>Let's talk it over!</span>
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
            <div className="card3 card_shadow">
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
        {/* <MessageForm /> */}
      </Container>
    </div>
  );
};

export default Platform;
