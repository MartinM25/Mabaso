import ServicesSection from "./sections/Services";
import AboutSection from "./sections/About";
import HeroSection from "./sections/Hero";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />

      <div className="text-center bg-white py-10">
        <h2 className="text-4xl font-bold mb-4">About Ayanda</h2>
        <div className="font-normal text-lg">
          <p className="">Welcome to the official site of Ayanda Mabaso</p>
          <p className="mb-4">Get to know one of South Africa's content creator | public speaker</p>
        </div>
      </div>

      <AboutSection />
      
      <ServicesSection />
    </div>
  );
}
