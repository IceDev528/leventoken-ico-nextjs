import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (min-width: 568px) {
    max-width: 100%;
  }
  @media (min-width: 576px) {
    max-width: 95%;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1440px) {
    max-width: 1340px;
  }
  &.fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default ContainerWrapper;
