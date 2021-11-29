import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import UserMapWrapper from "./userMap.style";

import roadMap1 from "assets/images/roadmap/1.svg";
import roadMap2 from "assets/images/roadmap/2.svg";
import roadMap3 from "assets/images/roadmap/3.svg";
import roadMap4 from "assets/images/roadmap/4.svg";
import roadMap5 from "assets/images/roadmap/5.svg";
import roadMap6 from "assets/images/roadmap/6.svg";

const UserMap = () => {
  return (
    <UserMapWrapper>
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Row>
            <Col className="sm-12 md-10 offset-md-1">
              <SectionTitle className="text-center">
                <Heading>Leven Network Roadmap</Heading>
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12 sm-12 md-6">
              <Box className="roadmap-block">
                <img src={roadMap1} />
              </Box>
            </Col>
            <Col className="xs-12 sm-12 md-6">
              <Box className="roadmap-block">
                <img src={roadMap2} />
              </Box>
            </Col>
            <Col className="xs-12 sm-12 md-6">
              <Box className="roadmap-block">
                <img src={roadMap3} />
              </Box>
            </Col>
            <Col className="xs-12 sm-12 md-6">
              <Box className="roadmap-block">
                <img src={roadMap4} />
              </Box>
            </Col>
            <Col className="xs-12 sm-12 md-6">
              <Box className="roadmap-block">
                <img src={roadMap5} />
              </Box>
            </Col>
            <Col className="xs-12 sm-12 md-6">
              <Box className="roadmap-block">
                <img src={roadMap6} />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default UserMap;
