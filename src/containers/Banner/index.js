import React from 'react';
import Link from 'next/link';

import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Badge from 'reusecore/Badge';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';

import CoinLogo from 'assets/images/icons/coin-logo.svg';

import particleTopLeft from 'assets/images/particles/banner/particle-top-left.png';
import particleUnderLogo from 'assets/images/particles/banner/particle-under-logo.png';
import prticleTopRight from 'assets/images/particles/banner/prticle-top-right.png';
import particleBottomLeft from 'assets/images/particles/banner/particle-bottom-left.png';
import particleBottomRight from 'assets/images/particles/banner/particle-bottom-right.png';

import BannerWrapper from './banner.style';

const Banner = () => {
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
                BUSINESS | USERS | DEVELOPERS | BANKS
              </Text>
              <Box className="banner-btn">
                <Link href="#"><a className="btn btn-fill">Get Free Leventoken</a></Link>
                <Link href="#"><a className="btn">White Paper</a></Link>
              </Box>
            </Box>
          </Col>
          <Col className="lg-4 xs-12">
            <img src={CoinLogo} className="banner__thumb" alt="cryptik banner thumb" />
          </Col>
        </Row>
        
      </Container>
    </BannerWrapper>
  )
}

export default Banner;