import React from "react";
import "./Footer.css";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MySlider from "./MySlider";
import MessageForm from "./MessageForm";

const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">
        <MessageForm />
      </Container>
      <MySlider />
      <div style={{ background: "#E2EEFF" }}>
        <Container maxWidth="lg" style={{ padding: "56px 24px" }}>
          <Grid container spacing={4}>
            <Grid item xs={2.8}>
              <img src="/images/logo.svg" alt="" />
              <p
                className="footer_item"
                style={{ marginTop: "13px", fontWeight: 400 }}
              >
                Our API-driven SaaS platform is a revolutionary way to build
                digital banking and payment products quickly, without hefty
                upfront investments, saving time and accelerating release.
              </p>
            </Grid>
            <Grid item xs={2}>
              <p className="footer_title">Company</p>
              <p className="footer_item">Platform</p>
              <p className="footer_item">Use Cases</p>
              <p className="footer_item">Services</p>
              <p className="footer_item">Who we serve</p>
              <p className="footer_item">Case Studies</p>
              <p className="footer_item">Resources</p>
              <p className="footer_item">Pricing</p>
              <p className="footer_item">Company</p>
            </Grid>
            <Grid item xs={2}>
              <p className="footer_title">Resources</p>
              <p className="footer_item">Learn</p>
              <p className="footer_item">Blog</p>
              <p className="footer_item">Services</p>
              <p className="footer_item">Theme</p>
              <p className="footer_item">Stocks & ETFs</p>
              <p className="footer_item">Crypto</p>
              <p className="footer_item">Public talks</p>
              <p className="footer_item">How we make money</p>
            </Grid>
            <Grid item xs={2.6}>
              <p className="footer_title">Resources</p>
              <p className="footer_item">Crypto</p>
              <p className="footer_item">Public talks</p>

              <p className="footer_item">Transfer your portfolio</p>
              <p className="footer_item">Capital gains tax calculator</p>
              <p className="footer_item">Fractional shares calculator</p>
            </Grid>
            <Grid item xs={2.6}>
              <p className="footer_title">Contact Us</p>
              <Grid container>
                <Grid item xs={2}>
                  <img src="/images/email.svg" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <p className="footer_item">info@theqrpay.com</p>
                  <p className="footer_item">suport@theqrpay.com</p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <img src="/images/phone.svg" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <p className="footer_item">(880)16854295515</p>
                  <p className="footer_item">(880)16854295515</p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <img src="/images/location.svg" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <p className="footer_item">
                    Lorem ipsum dolor sit amet consectetur. Amet proin viverra
                    imperdiet
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <img
                  src="/images/facebookIcon.svg"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                <img
                  src="/images/instagramIcon.svg"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                <img
                  src="/images/twitterIcon.svg"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                <img src="/images/linkedinIcon.svg" alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="footer_bottom_section">
        <p className="text_style">
          &copy; Copyright 2023 QRP, Inc. All Rights Reserved.
        </p>
        <p className="text_style">
          <Link to="/">Terms & Conditions</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
