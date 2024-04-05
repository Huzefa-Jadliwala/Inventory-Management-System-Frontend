import styled from "styled-components";
import Title from "../styles/ui/Title";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Title variant="h2">Page Not Found</Title>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
