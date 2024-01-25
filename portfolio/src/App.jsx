import './App.css'
import { useLayoutEffect } from 'react';
import { Hero } from './components';

function App() {
  useLayoutEffect(() => {
    async () => {
      const locomotiveScroll = (await import ('locomotive-scroll')).default;
      new locomotiveScroll();
    };
  });
  return(
    <>
      <Hero />
    </>
  );
}

export default App
