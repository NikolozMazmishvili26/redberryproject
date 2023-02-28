import styled from "styled-components";

// import asset
import loading from "../../assets/loading.gif";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingImage src={loading} alt="loading" />
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.img``;
