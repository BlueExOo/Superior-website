import React from "react";

import { featuresData } from "../utils";

// import icons
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  const { title, list } = featuresData;
  return (
    <section id="features" className="my-[30px] md:my-[195px] xl:my-[40px]">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="h2 mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
        </div>
        {/* feature list */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-3">
          {list.map((feature, index) => {
            // destructure feature
            const { image, bgImage, title, description, buttonText, delay } =
              feature;
            // feature item
            return (
              <div
                key={index}
                className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={delay}
              >
                {/* bg image */}
                <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img src={bgImage} alt="BGFeatureImage" />
                </div>

                {/* icon image */}
                <div
                  className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="FeatureImage" />
                </div>
                {/* text */}
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic mb-4">{description}</p>
                  {/* link & arrow */}
                  <div className="flex items-center gap-x-2 group">
                    <a className="text-primary font-bold" href="#">
                      {buttonText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
