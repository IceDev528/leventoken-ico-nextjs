import React from "react";
import dynamic from 'next/dynamic'

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Image from "reusecore/Image";
import StatisticsSectionWrapper from "./statistics.style";
import FundsAllocation from "assets/images/distribution/funds-allocation.svg";
import TokenDistribution from "assets/images/distribution/token-distribution.svg";

const Statistics = () => {
  return (
    <StatisticsSectionWrapper>
      <Box className="statistics-wrapper">
        <Container>
          <Row>
            <Col className="md-6 sm-6">
              <Box className="statistics-image">
                <Heading as="h2">Funds Allocation</Heading>
                <img src={FundsAllocation} width="100%" />
              </Box>
            </Col>
            <Col className="md-6 sm-6">
              <Box className="statistics-image">
                <Heading as="h2">Token Distribution</Heading>
                <img src={TokenDistribution} width="100%"/>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
