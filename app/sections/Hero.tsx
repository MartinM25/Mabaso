import GradientButton from "../components/GradientButton";
import TypingEffect from "../components/TypingEffect";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative font-sans">
      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          maxHeight: "100vh",
        }}
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{
          maxHeight: "100vh",
        }}
      />
      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6">
        {/* Typing Effect */}
        <TypingEffect
          phrases={[
            "Content Creator",
            "Public Speaker",
            "Social Media Manager",
          ]}
          speed={100}
          delay={800}
        />
        <p className="text-lg md:text-2xl font-sans font-normal mb-6 max-w-3xl">
          Helping you think bigger, innovate, and thrive by sharing fresh ideas and actionable strategies.
        </p>
        <GradientButton text="Book Ayanda" href="/book-ayanda" />
      </div>
    </section>
  );
};

export default HeroSection;
