import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const TechStack = () => {
    return (
        <div id="page-5">
            <span>
                <div id="golu"></div>
                <p>My Tech & Creative Stack</p>
            </span>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 2,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div><h3>HTML, CSS & JavaScript</h3></div><br />
                    <div>I build responsive, interactive, and visually appealing websites with clean and efficient code that brings ideas to life.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><h3>MERN Stack</h3></div><br />
                    <div>From backend logic to frontend interactivity, I create scalable and modern web applications using the MERN stack.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><h3>SQL</h3></div><br />
                    <div>I design and manage databases to ensure fast, secure, and reliable data handling for applications.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><h3>Figma</h3></div><br />
                    <div>I transform ideas into sleek, user-friendly UI/UX designs with Figma’s collaborative design tools.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><h3>Canva</h3></div><br />
                    <div>I design eye-catching graphics, posters, and digital content that connect with audiences.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><h3>Adobe Lightroom</h3></div><br />
                    <div>I enhance photographs with professional-grade edits that highlight detail, mood, and creativity.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><h3>VN – Video Editing</h3></div><br />
                    <div>I edit and craft videos that engage, inspire, and tell stories with rhythm and clarity.</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TechStack;
