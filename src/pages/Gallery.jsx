import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
import PageHero from "../components/PageHero";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";

const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1605973029521-8154da591bd7?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=1600&q=80",
  ];

  //   const containerRef = useRef(null);
  useEffect(() => {
    // Ensure the DOM element exists
    const container = document.querySelector(".masonry-gallery-demo");
    if (container) {
      // Initialize Masonry
      const msnry = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });

      // Use imagesLoaded with Masonry
      imagesLoaded(container).on("progress", function () {
        // Layout Masonry after each image loads
        msnry.layout();
      });
    }
  }, []);

  return (
    <>
      <PageHero title="Gallery" page="Gallery" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <LightGallery
            elementClassNames={"masonry-gallery-demo"}
            plugins={[lgZoom, lgShare, lgHash]}
            speed={500}
          >
            <div className="grid-sizer"></div>
            {galleryImages.map((src, index) => (
              <Link key={index}
                to={src}
                className="gallery-item relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-[10px] after:w-[calc(100%-10px)] after:h-full after:bg-[#063d1dbd] after:rotate-y-[90deg] after:transition-all after:duration-500 after:ease-in-out hover:after:rotate-y-0 hover:after:left-[10px] before:content-['+'] before:absolute before:top-[50%] before:left-[50%] before:w-[55px] before:h-[55px] before:text-center before:align-middle before:leading-[48px] before:text-3xl before:rounded-full before:transform before:translate-[-50%] before:transition-all before:duration-500 before:ease-in-out before:text-white before:bg-primary before:z-10 before:opacity-0 hover:before:opacity-100">
              <img
                  className="w-full"
                  src={src.replace("w=1600", "w=500")}
                  alt={`Gallery ${index}`}
                />
              </Link>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  );
};

export default Gallery;
