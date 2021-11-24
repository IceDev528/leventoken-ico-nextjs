import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import { SectionTitle, SectionBackground } from 'reusecore/SectionTitle';
import { FaGooglePlay, FaApple } from "react-icons/fa";
import PotsWork from 'assets/images/potswork/Potswork.svg';
import PToks from 'assets/images/potswork/PToks.svg';
import ToksCity from 'assets/images/potswork/ToksCity.svg';
import AboutSectionWrapper from './about.style';

const About = () => {
    return (
        <AboutSectionWrapper id="about">
            <Container>
                <Row>
                    <Col className="lg-5 md-6 sm-12">
                        <Image src={PotsWork} className="about-image" alt="potswork" />
                    </Col>
                    <Col className="lg-6 offset-lg-1 md-6 sm-12">
                        <Box className="about-right-content">
                            <SectionTitle>
                                <SectionBackground>
                                    <Heading as="h1">
                                        Potswork App Payment Integration
                                    </Heading>
                                </SectionBackground>

                                <Text>
                                    Our 1st Leven Project application will provide crypto payment options for a local service app called Potswork.
                                    Potswork is a local service app for freelancers and businesses providing services like rideshare drivers, movers, cleaners, handymen and a host of other online services. Potswork apps were launched in 2021 and already have over 400,000 downloads combined on the app stores. Potswork is also looking to accept goods for sale from businesses all over the world only via Leventoken payment.
                                    The Leven project complements crypto payment options for Potswork apps, with the 1st of millions of applications to power the Leven Project Network.
                                </Text>
                            </SectionTitle>

                            {/* <Box className="about-list">
                                <Text as="span">75% Distributed to Community.</Text>
                                <Text as="span">13% Reserved Funding.</Text>
                                <Text as="span">9% Founders and Team Management.</Text>
                            </Box> */}

                            <Box className="about-btn-wrapper">
                                <a className="btn btn-fill" href="https://play.google.com/store/apps/dev?id=5434668364201614200&hl=en_US&gl=US" target="_blank">
                                    <FaGooglePlay /> Google Play
                                </a>
                                <a className="btn" href="https://apps.apple.com/us/developer/potswork-llc/id1539375753" target="_blank">
                                    <FaApple /> Apple Store
                                </a>
                            </Box>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col className="lg-5 md-6 sm-12">
                        <Image src={ToksCity} className="about-image" alt="tokscity" />
                    </Col>
                    <Col className="lg-6 offset-lg-1 md-6 sm-12">
                        <Box className="about-right-content">
                            <SectionTitle>
                                <SectionBackground>
                                    <Heading as="h1">
                                        Product Token For Crowdfunding Campaigns
                                    </Heading>
                                </SectionBackground>

                                <Text>
                                    Tap into the over $3 trillion dollar market. No coding necessary. Give your product crowdfunding campaign some rocket fuel. Leven Network app Product token allows any startup planning on crowdfunding to easily setup a token campaign on our user friendly crowdfunding platform. Crowdfund with Tokscity.com
                                </Text>
                            </SectionTitle>

                            <Box className="about-btn-wrapper">
                                <a className="btn" href="https://www.ptoks.com" target="_blank">
                                    Join the Waitlist
                                </a>
                            </Box>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col className="lg-5 md-6 sm-12">
                        <Image src={PToks} className="about-image" alt="ptoks" />
                    </Col>
                    <Col className="lg-6 offset-lg-1 md-6 sm-12">
                        <Box className="about-right-content">
                            <SectionTitle>
                                <SectionBackground>
                                    <Heading as="h1">
                                        People Token Exchange
                                    </Heading>
                                </SectionBackground>

                                <Text>
                                    Know your MarketCap. Invest In someone else's future. Leven Network People token allows anyone to start their own token on www.ptoks.com. One you can gain value as you progress in life. Whether you are a social influencer, a scientist or student athlete, with Ptoks.com you can carry a MarketCap forever. It's as easy as setting up a social media account and ready to trade your new token on the Leven Network People Token Exchange. Start your token today and Leventokens will make the rest happen for your launch to the moon.
                                </Text>
                            </SectionTitle>

                            <Box className="about-btn-wrapper">
                                <a className="btn" href="https://www.tokscity.com" target="_blank">
                                    Join the Waitlist
                                </a>
                            </Box>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </AboutSectionWrapper>
    )
}


export default About;