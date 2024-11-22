"use client"

import React, { useEffect, useState, useRef } from 'react';

interface TypingEffectProps {
  phrases: string[];
  speed?: number;
  delay?: number;
};

const TypingEffect: React.FC<TypingEffectProps> = ({ phrases, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];
      const isEndOfPhrase = !isDeleting && displayedText === currentPhrase;

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (!displayedText) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      } else if (!isEndOfPhrase) {
        setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
      }

      if (isEndOfPhrase) setTimeout(() => setIsDeleting(true), delay);
    };

    timerRef.current = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayedText, isDeleting, index, phrases, speed, delay]);

  return (
  <div className='w-full h-24 justify-center text-center mb-2 lg:mb-0'>
    <h1 className="font-sans text-5xl lg:text-7xl mb-5 font-bold">{displayedText}</h1>
  </div>
  ); 
};

export default TypingEffect