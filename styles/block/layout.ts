import {createGlobalStyle} from 'styled-components';
import {bodyColor} from '@utils/theme';

const LayoutStyle = createGlobalStyle`
    body,
    html,
    #__next {
      width: 100%;
      height: 100%;
    }

    body {
      background-color: ${bodyColor};
    }

    #__next {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-x: hidden;
    }
`;

export default LayoutStyle;
