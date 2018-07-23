import styled from 'styled-components';

export const Title = styled.div`
  font-size: 20px;
`;

export const Content = styled.div`
  font-family: Helvetica;

  * {
    box-sizing: border-box;
  }

  pre {
    width: 100%;
    overflow: auto;
  }
`;

export const Empty = styled.div`
  color: #f8f8f2;
  background-color: #272822;
  border-radius: 3px;
  padding: 5px;
  text-shadow: 1px 1px black;
  text-align: center;
  margin: 15px 0;
`;

export const CuteWrapper = styled.div`
  max-width: 400px;
`;