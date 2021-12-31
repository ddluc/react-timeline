import { createGlobalStyle } from 'styled-components';

import IBMPlexMono__Regular from '../assets/fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf';
import IBMPlexMono__Bold from '../assets/fonts/ibm-plex-mono/IBMPlexMono-Bold.ttf';
import IBMPlexMono__BoldItalic from '../assets/fonts/ibm-plex-mono/IBMPlexMono-BoldItalic.ttf';
import IBMPlexMono__Italic from '../assets/fonts/ibm-plex-mono/IBMPlexMono-Italic.ttf';

import IBMPlexSans__Regular from '../assets/fonts/ibm-plex-sans/IBMPlexSans-Regular.ttf';
import IBMPlexSans__Bold from '../assets/fonts/ibm-plex-sans/IBMPlexSans-Bold.ttf';
import IBMPlexSans__Italic from '../assets/fonts/ibm-plex-sans/IBMPlexSans-Italic.ttf';

export default createGlobalStyle`
    
    @font-face {
        font-family: 'IBM Plex Mono';
        src: url(${IBMPlexMono__Regular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'IBM Plex Mono';
        src: url(${IBMPlexMono__Bold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'IBM Plex Mono';
        src: url(${IBMPlexMono__Italic}) format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'IBM Plex Mono';
        src: url(${IBMPlexMono__BoldItalic}) format('truetype');
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'IBM Plex Sans';
        src: url(${IBMPlexSans__Regular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'IBM Plex Sans';
        src: url(${IBMPlexSans__Bold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'IBM Plex Sans';
        src: url(${IBMPlexSans__Italic}) format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    body { 
        font-family: 'IBM Plex Sans';
        font-weight: normal; 
    }
`;