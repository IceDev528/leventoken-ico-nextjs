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
import potsWork from 'assets/images/icons/potswork.svg';
import AboutSectionWrapper from './about.style';

const About = () => {
    return (
        <AboutSectionWrapper id="about">
            <Container>
                <Row>
                    <Col className="lg-5 md-6 sm-12">
                        <Image src={potsWork} className="about-image" alt="cryptik about image" />
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
            </Container>
        </AboutSectionWrapper>
    )
}


export default About;