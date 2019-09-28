import {createGlobalStyle} from 'styled-components';

const LayoutStyle = createGlobalStyle`
    body,
    html,
    #__next {
      width: 100%;
      height: 100%;
    }

    #__next {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
`;

export default LayoutStyle;
