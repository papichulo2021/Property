'use client';
import {useState, useEffect} from 'react';
import PropertySearchForm from "./PropertySearchForm";
import e1 from '@/assets/images/rent/e1.jpg';
import e2 from '@/assets/images/rent/e2.jpg';
import e3 from '@/assets/images/rent/e3.jpg';
import e4 from '@/assets/images/rent/e4.jpg';
import e5 from '@/assets/images/rent/e5.jpg';

const Hero = () => {
  const images = [e1.src, e2.src, e3.src, e4.src, e5.src];  // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Track current image

  useEffect(() => {
      const interval = setInterval(() => {
          // Change the image every 5 seconds (5000ms)
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change interval duration as needed

      // Clean up interval on component unmount
      return () => clearInterval(interval);
  }, []);

  return (
      <section
          className="bg-blue-700 py-60 mb-4"
          style={{
              backgroundImage: `url(${images[currentImageIndex]})`, // Set background to the current image
              backgroundSize: 'cover',           // Ensure the image covers the full section
              backgroundPosition: 'center',      // Center the background image
              transition: 'background-image 1s ease-in-out', // Smooth transition between images
          }}
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
              <div className="text-center">
                  <h1 className="text-4xl font-extrabold text-slate-50 sm:text-5xl md:text-6xl">
                      Find The Perfect Rental
                  </h1>
                  <p className="my-4 text-xl text-white">
                      Discover the perfect property that suits your needs.
                  </p>
              </div>
              {/* Form Component */}
              <PropertySearchForm />
          </div>
      </section>
  );
}

export default Hero;
