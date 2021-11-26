import React from "react";
import CountdownTimer from "react-component-countdown-timer";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import {
  FaEthereum
} from "react-icons/fa";
import CoinFundWrapper from "./coinFund.style";
import { withTheme } from "styled-components";

const CoinFund = (props) => {
  let preSaleDiff = new Date("March 01, 2022").getTime() - new Date().getTime();
  let preSaleCount = Math.floor(preSaleDiff / 1000);
  
  const settings = {
    count: preSaleCount,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  };

  const customStyles = {
    email: {
      color: "#fff"
    }
  };
  return (
    <CoinFundWrapper id="presale">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Leventoken ICO start March 1st 2022.
                  </Heading>
                </SectionBackground>
                <Text>
                  Presale date will be announced soon. Our private sale is open now. Please connect your wallet. Contact <b style={customStyles.email}>info@levenproject.org</b> for more information
                </Text>
              </SectionTitle>
            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text> Leventoken ICO Progress </Text>
              <CountdownTimer {...settings} />
            </Box>
            <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaEthereum />{" "}
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  );
};

export default CoinFund;
