import styled from "styled-components";

const UserMapWrapper = styled.div`
  padding: 85px 0;

  .usermap-wrapper {
    .roadmap-block {
      padding: 40px 20px 20px 20px;
      background: #2B1867;
      margin-top: 20px;
      text-align: center;
    }
  }
  
  @media only screen and (max-width: 912px) {
    .heading{
      font-size: 34px;
    }
  }
  @media only screen and (max-width: 568px) {
    .heading{
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;

export default UserMapWrapper;
