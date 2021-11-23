import React from "react";
import dynamic from 'next/dynamic'

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Image from "reusecore/Image";
import StatisticsSectionWrapper from "./statistics.style";

const TokenDistribution = dynamic(() => import('./tokenDistribution'), {
  ssr: false
})
const FundsAllocation = dynamic(() => import('./fundsAllocation'), {
  ssr: false
})

const Statistics = () => {
  return (
    <StatisticsSectionWrapper>
      <Box className="statistics-wrapper">
        <Container>
          <Row>
            <Col className="md-6 sm-6">
              <Box className="statistics-image">
                <Heading as="h2">Token Distribution</Heading>
                <FundsAllocation />
              </Box>
            </Col>
            <Col className="md-6 sm-6">
              <Box className="statistics-image">
                <Heading as="h2">Funds Allocation</Heading>
                <TokenDistribution />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
