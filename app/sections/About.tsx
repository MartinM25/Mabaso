import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="font-sans py-10 px-10 lg:px-28 bg-black">
      {/* Image and Description Section */}
      <div className="flex w-full flex-col lg:flex-row md:space-x-4 lg:space-x-6 mb-10">
        <div className="flex justify-center w-full lg:w-[50%] py-6">
          <Image
            src="/about.jpeg"
            alt="Ayanda Mabaso"
            width={500}
            height={500}
            quality={100}
            className="rounded-2xl w-full h-auto"
          />
        </div>
        <div className="py-6 text-white w-full lg:w-[50%]">
          <h2 className="text-4xl font-bold mb-4">Meet Ayanda</h2>
          <p className="text-lg mb-4">
            Ayanda Mabaso is a rising force in the digital space, inspiring small businesses and individuals to grow their brands and thrive. As a young content creator, social media manager, and public speaker, Ayanda empowers others with fresh strategies and actionable insights for success. With a passion for helping others harness the power of digital platforms, Ayanda focuses on creating engaging content, building strong online communities, and fostering authentic connections. Through dynamic speaking engagements and coaching, Ayanda encourages others to unlock their full potential and create lasting impact in their industries.
          </p>
          <blockquote>
            <p className="italic mb-2">
              &quot;You have the time. you just need to learn how to prioritize.!&quot;
            </p>
            <footer className="text-sm text-gray-400">Ayanda Mabaso</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
