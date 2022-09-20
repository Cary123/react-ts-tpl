import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';
import { StrictMode } from 'react';
import ReactDom from 'react-dom';
const rootElement = document.getElementById('root');

const RootDOM = () => {
  return <div>Hello</div>;
};

ReactDom.render(
  <StrictMode>
    <RootDOM />
  </StrictMode>,
  rootElement
);
