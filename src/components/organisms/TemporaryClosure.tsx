import React, {useEffect, useRef, useState} from 'react';

export const TemporaryClosure = () => {
  const [isFixed, setIsFixed] = useState(false);
  const closureRef = useRef<HTMLDivElement>(null);
  const [fixedTop, setFixedTop] = useState(0);
  const [scrollTopFixed, setScrollTopFixed] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (closureRef.current) {
        const rect = closureRef.current.getBoundingClientRect();
        console.log(isFixed, document.scrollingElement!.scrollTop, scrollTopFixed)
        if (!isFixed && rect.top <= 0) {
          console.log("setFixed + setScrollTopFixed to", document.scrollingElement!.scrollTop)
          setIsFixed(true);
          setScrollTopFixed(document.scrollingElement!.scrollTop);
        }

        if (isFixed && document.scrollingElement!.scrollTop < scrollTopFixed) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixed, scrollTopFixed]);

  return (
    <div ref={closureRef} className={`temp-close ${isFixed ? 'fixed' : ''}`}>
      <h3>Wegens vakantie zijn wij tussen 23 juli en 6 september gesloten.</h3>
    </div>)
};
