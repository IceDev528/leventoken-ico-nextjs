import React, {useState} from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";
import Modal from 'react-modal';
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import {
  FaEthereum
} from "react-icons/fa";
import CoinFundWrapper from "./coinFund.style";
import { withTheme } from "styled-components";

Modal.setAppElement('body');

const CoinFund = (props) => {
  let preSaleDiff = new Date("March 01, 2022").getTime() - new Date().getTime();
  let preSaleCount = Math.floor(preSaleDiff / 1000);
  let privateSaleDiff = new Date("November 25, 2021").getTime() - new Date().getTime();
  let privateSaleCount = Math.floor(privateSaleDiff / 1000);

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
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#290E59',
      textAlign: 'center',
      minWidth: '300px',
      borderRadius: '15px'
    },
    input: {
      height: '50px',
      borderRadius: '10px',
      border: 'none',
      padding: '10px',
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: '20px',
      fontFamily: 'MuseoSans'
    },
    buy: {
      background: 'linear-gradient(94deg,rgba(200, 56, 231, 1) 0%,rgba(31, 42, 213, 1) 100%)',
      color: 'white',
      border: 'none',
      height: 'unset',
      width: '100px',
      padding: '10px',
      borderRadius: '10px',
      marginTop: '20px'
    },
    close: {
      color: 'white',
      position: 'absolute',
      top: '0',
      right: '0',
      width: 'fit-content'
    },
    highlight: {
      border: '2px solid #fff'
    },
    email: {
      color: "#fff"
    }
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function amountHandler(e) {
    props.setTokenAmount(e.target.value);
  }

  const getAmount =  async () => {
    /*const investPrice = props.tokenAmount * props.tokenByETH;
    if (investPrice < 2.36)  {
      alert('Minimum is $10,000, please try again');
    } else {
      await props.buyToken();
    }*/
    await props.buyToken();
  }

  let buyButton;
  if (privateSaleCount > 0) {
    buyButton = <Button onClick={openModal} className="btn btn-fill" disabled>Buy Leventoken</Button>;
  } else {
    buyButton = <Button onClick={openModal} className="btn btn-fill">Buy Leventoken</Button>;
  }

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

              <Box className="btn-wrapper">
                {buyButton}
              </Box>
              
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Buy Leventoken"
              >
                <button onClick={closeModal} style={customStyles.close}>✗</button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>1 LEVEN to $0.1</h2>
                <p>Presale Starts February 26 2022</p>
                <p>Public Sale March 1st 2022</p>
                <p>No Minimum</p>
                <p>Private sale ongoing</p>
                <p>25% DISCOUNT, Minimum $10,000</p>
                <div style={customStyles.highlight}>
                  <h3>ETH Required To Buy</h3>
                </div>
                <div>
                  LEVEN Amount:
                  <input 
                    type="number" 
                    className="token-amount" 
                    style={customStyles.input} 
                    onChange={amountHandler}
                  />
                </div>
                <div>ETH Amount:  : { props.tokenAmount * props.tokenByETH }</div>
                <Button onClick={getAmount} className="btn btn-fill" style={customStyles.buy}>Buy</Button>
              </Modal>
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
