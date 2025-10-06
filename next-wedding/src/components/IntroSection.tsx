"use client";

import Image from "next/image";
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

type IntroSectionProps = {
  name: string;
  to: string;
  heroes: string[];
};

export default function IntroSection({ name, to, heroes }: IntroSectionProps) {
  useEffect(() => {
    // Initialize Swiper for hero slides
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      effect: "fade",
      speed: 2000,
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section id="intro" className="s-intro">
      <div className="s-intro__slider swiper-container">
        <div className="swiper-wrapper">
          {heroes.map((src, index) => (
            <div
              key={src}
              className="s-intro__slide swiper-slide"
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={src}
                alt={`Hero ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="row s-intro__content">
        <div className="column">
          <div className="text-pretitle">The Wedding</div>
          <h1 className="text-huge-title">{name}</h1>
          <div className="text-pretitle">
            Dear: <span className="font-bold text-white">{to}</span>
            <br />We are inviting you to the wedding
            <br />
            <br />
            <a href="#details" className="btn--stroke2 btn--small smoothscroll">
              Open Invitation
            </a>
          </div>

          <div className="s-intro__content-bottom">
            <div className="s-intro__content-bottom-block">
              <h5>Save the date</h5>
              <div className="counter">
                <div className="counter__time">
                  <span className="ss-days">000</span>
                  <span>D</span>
                </div>
                <div className="counter__time">
                  <span className="ss-hours">00</span>
                  <span>H</span>
                </div>
                <div className="counter__time minutes">
                  <span className="ss-minutes">00</span>
                  <span>M</span>
                </div>
                <div className="counter__time">
                  <span className="ss-seconds">00</span>
                  <span>S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="s-intro__scroll">
        <a href="#details" className="smoothscroll">
          Scroll For More
        </a>
      </div>
    </section>
  );
}
