import React, { useState } from 'react';
import Link from 'next/link';
import Button from "reusecore/Button";
import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Badge from 'reusecore/Badge';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';

import CoinLogo from 'assets/images/logo/coin-logo.svg';
import Modal from 'react-modal';
import particleTopLeft from 'assets/images/particles/banner/particle-top-left.png';
import particleUnderLogo from 'assets/images/particles/banner/particle-under-logo.png';
import prticleTopRight from 'assets/images/particles/banner/prticle-top-right.png';
import particleBottomLeft from 'assets/images/particles/banner/particle-bottom-left.png';
import particleBottomRight from 'assets/images/particles/banner/particle-bottom-right.png';
import videoPosterToken from 'assets/images/banners/video/leven-token.png';
import videoPosterIntro from 'assets/images/banners/video/leven-intro.png';
import BannerWrapper from './banner.style';

Modal.setAppElement('body');

const Banner = (props) => {
  let privateSaleDiff = new Date("November 25, 2021").getTime() - new Date().getTime();
  let privateSaleCount = Math.floor(privateSaleDiff / 1000);

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
      fontFamily: 'MuseoSans',
      fontWeight: 'bold',
      fontSize: '20px'
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
      border: '2px solid #fff',
      borderRadius: '15px'
    },
    email: {
      color: "#fff"
    },
    eth: {
      fontWeight: 'bold',
      fontSize: '20px'
    },
    nextRow: {
      marginTop: '100px'
    },
    videoContainer: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      paddingTop: '56.25%'
    },
    video: {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      width: '100%',
      height:'100%'
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
    const investPrice = props.tokenAmount * props.tokenByETH;
    if (investPrice < 2)  {
      alert('Minimum is 2ETH, please try again');
    } else {
      await props.buyToken();
    }
  }

  let buyButton;
  if (privateSaleCount > 0) {
    buyButton = <a className="btn" onClick={openModal} disabled>Buy Leventoken</a>;
  } else {
    buyButton = <a className="btn" onClick={openModal}>Buy Leventoken</a>;
  }

  return (
    <BannerWrapper>
      <img src={particleTopLeft} className="section__particle top-left" alt="cryptik particles" />
      <img src={particleUnderLogo} className="section__particle two" alt="cryptik particles" />
      <img src={prticleTopRight} className="section__particle top-right" alt="cryptik particles" />
      <img src={particleBottomLeft} className="section__particle bottom-left" alt="cryptik particles" />
      <img src={particleBottomRight} className="section__particle bottom-right" alt="cryptik particles" />
      <Container>
        <Row>
          <Col className="lg-8 xs-12">
            <Box className="banner-content">
              {/* <Badge className="offer-text">14 days, a huge of free trial</Badge> */}
              <Heading as="h1">
                A User Owned Decentralized Settlement Network For Real World Payments
              </Heading>
              <Text>
                BUSINESSES | USERS | DEVELOPERS | BANKS
              </Text>
              <Box className="banner-btn">
                <a onClick={props.importToken} className="btn btn-fill">Import Leventoken</a>
                {buyButton}
                <a onClick={props.getFreeToken} className="btn btn-fill">Get 1000 LEVEN FREE</a>
              </Box>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Buy Leventoken"
              >
                <button onClick={closeModal} style={customStyles.close}>✗</button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>1 LEVEN to 0.000025 ETH</h2>
                <p>Presale Starts February 26 2022</p>
                <p>Public Sale March 1st 2022</p>
                <p>No Minimum</p>
                <p>Private Sale Ongoing.</p>
                <p>Import your tokens after order complete</p>
                <p>25% DISCOUNT, Minimum 2ETH</p>
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
                <div style={customStyles.eth}>ETH Amount:  : { props.tokenAmount * props.tokenByETH }</div>
                <Button onClick={getAmount} className="btn btn-fill" style={customStyles.buy}>Buy</Button>
              </Modal>
            </Box>
          </Col>
          <Col className="lg-4 xs-12">
            <img src={CoinLogo} className="banner__thumb" alt="cryptik banner thumb" />
          </Col>
        </Row>
        <Row style={customStyles.nextRow}>
          <Col className="xs-12" style={customStyles.nextRow}>
          <div style={customStyles.videoContainer}>
            <iframe src="https://www.loom.com/embed/c1f373e752b043c480fdc4bc832d4427" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={customStyles.video}></iframe>
          </div>
          </Col>
          <Col className="xs-12" style={customStyles.nextRow}>
            <div style={customStyles.videoContainer}>
              <iframe src="https://www.loom.com/embed/0b8f770b952d44e49f2ab44f91de8e0c" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={customStyles.video}></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  )
}

export default Banner;
