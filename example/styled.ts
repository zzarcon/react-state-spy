import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
    margin: 0;
  }

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div`

`;

export const AppContent = styled.div`

`;

export const DatePickerWrapper = styled.div`
  width: 200px;
`;