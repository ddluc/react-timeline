import { createGlobalStyle } from 'styled-components';

import IBMPlexMono__Regular from '../assets/fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf';

export default createGlobalStyle`
    // Declare the font faces
    @font-face {
        font-family: 'IBM Plex Mono';
        src: local('IBM Plex Mono'), local('IBM Plex Mono'),
        url(${IBMPlexMono__Regular}) format('truetype'),
        font-weight: 300;
        font-style: normal;
    }
    // Set the default body font
    body { 
        font-family: 'IBM Plex Mono'
    }
`;