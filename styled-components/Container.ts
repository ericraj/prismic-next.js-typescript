import styled from "@emotion/styled";

const Container = styled.div`
  min-height: calc(100vh - 170px);
  padding: 70px 80px;
  width: 100%;
  max-width: 1366px;

  @media (max-width: 1365px) {
    max-width: 100vw;
  }

  @media (max-width: 767px) {
    padding: 50px 20px;
  }
`;

export default Container;
