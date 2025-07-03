declare module '*.svg' { const src: string; export default src; }
declare module '*.png' { const src: string; export default src; }
declare module 'react';
declare module 'react-dom';
declare module 'react-dom/client';
declare module '*.css';
declare module 'react-router-dom';
declare module 'styled-components';
declare module 'axios';
declare module '@tanstack/react-query';
declare module '@tanstack/react-query-devtools';
declare module 'react/jsx-runtime';
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
