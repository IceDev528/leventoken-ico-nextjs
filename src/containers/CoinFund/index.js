import React from "react";
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

const CoinFund = () => {
  const settings = { 
    count: 7948800,
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
    }
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tokenAmount, setTokenAmount] = React.useState(0);
  const tokenByETH = 0.00025;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function amountHandler(e) {
    setTokenAmount(e.target.value);
  }

  function getAmount() {
    alert(tokenAmount * tokenValule);
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
                  Presale date will be announced soon. Our private sale is open now. Please connect your wallet. Contact 
                  <a href="info@levenproject.org" target="_blank"><u> info@levenproject.org </u></a>
                  for more information
                </Text>
              </SectionTitle>

              <Box className="btn-wrapper">
                <Button onClick={openModal} className="btn btn-fill">Buy Leventoken</Button>
              </Box>
              
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Buy Leventoken"
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Buy LEVEN</h2>
                <button onClick={closeModal} style={customStyles.close}>✗</button>
                <div>
                  ETH Amount: <input type="number" className="token-amount" style={customStyles.input} onChange={amountHandler}/>
                </div>
                <div>LEVEN : { tokenAmount / tokenByETH }</div>
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
