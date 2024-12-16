import { useState } from "react";
import wosm from "../assets/images/logo/wosm-purple.png";

function Hero() {
  const [isAsideOpen, setAsideOpen] = useState(false);

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

  const closeAside = () => {
    setAsideOpen(false);
  };
  return (
    <>
      <header className="w-full relative overflow-hidden">
        <nav className="container mx-auto px-32 bg-custom_purple py-4 hidden lg:flex items-center justify-between">
          <div className="media-social">
            <ul className="ri-xl text-custom_white flex items-center gap-8">
              <li>
                <i className="ri-youtube-fill "></i>
              </li>
              <li>
                <i className="ri-instagram-line "></i>
              </li>
              <li>
                <i className="ri-tiktok-fill "></i>
              </li>
              <li>
                <i className="ri-whatsapp-line"></i>
              </li>
            </ul>
          </div>
          <div className="nav-menu">
            <ul className="text-custom_white font-medium flex items-center gap-7 text-xs">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Berita</a>
              </li>
              <li>
                <a href="#">Kejuaraan</a>
              </li>
              <li>
                <a href="#">
                  Login<i className="ri-user-5-line ri-lg ml-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="container mx-auto lg:px-32 h-screen bg-[url(./assets/images/events/raicab.jpg)] bg-cover bg-center py-8 w-full px-7">
          <nav className="flex items-center justify-between">
            <div className="brand flex items-center gap-1">
              <img src={wosm} alt="" className="lg:w-16 w-12" />
              <div className="brand-name flex items-center font-medium text-custom_white text-sm lg:text-xl leading-[15px] lg:leading-[20px]">
                <p>
                  KOMANDO PRAMUKA <br />
                  SMEA TIGA SURAKARTA
                </p>
              </div>
            </div>
            <div className="nav-menu lg:flex items-center hidden">
              <ul className="font-semibold text-sm flex items-center gap-12 text-custom_white">
                <li>
                  <a href="#">Berkenalan</a>
                </li>
                <li>
                  <a href="#">Tugas</a>
                </li>
                <li>
                  <a href="#">Bergabung</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-white rounded-full px-7 py-2 text-custom_purple"
                  >
                    Donasi
                  </a>
                </li>
              </ul>
            </div>
            <div className="humberger lg:hidden flex">
              <i
                className="ri-menu-3-line ri-xl text-custom_white"
                onClick={toggleAside}
              ></i>
            </div>
          </nav>
          <div className="header flex justify-center  flex-col  lg:ml-24 h-full lg:-mt-16 gap-3">
            <h1 className="font-semibold text-2xl lg:text-4xl max-w-80 lg:max-w-[32rem] text-custom_white lg:leading-normal">
              Menciptakan pengalaman pembelajaran transformatif bagi generasi
              muda, everywhere.
            </h1>
            <a
              href="#"
              className="bg-white rounded-full px-7 py-2 text-custom_purple w-fit"
            >
              Gabung
            </a>
          </div>
        </header>
        {isAsideOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeAside}
          ></div>
        )}
        <aside
          className={`absolute top-0 right-0 bg-custom_white h-screen overflow-y-scroll z-50 transition-transform duration-300 ${
            isAsideOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="nav-menu flex flex-col w-80">
            <ul className="font-lg font-medium flex flex-col">
              <li className="font-semibold py-6 px-8 text-center border-b-[0.2px] border-gray-300">
                Menu
              </li>
              <li className="py-6 px-8 border-b-[0.2px] border-gray-300 flex justify-between items-center">
                <a href="#" className="flex justify-between w-full">
                  <span>Berkenalan</span>
                  <i className="ri-skip-right-line text-custom_purple"></i>
                </a>
              </li>
              <li className="py-6 px-8 border-b-[0.2px] border-gray-300 flex justify-between items-center">
                <a href="#" className="flex justify-between w-full">
                  <span>Tugas</span>
                  <i className="ri-skip-right-line text-custom_purple"></i>
                </a>
              </li>
              <li className="py-6 px-8 border-b-[0.2px] border-gray-300 flex justify-between items-center">
                <a href="#" className="flex justify-between w-full">
                  <span>Bergabung</span>
                  <i className="ri-skip-right-line text-custom_purple"></i>
                </a>
              </li>
              <li className="py-6 px-8 border-b-[0.2px] border-gray-300 flex justify-between items-center">
                <a
                  href="#"
                  className="flex justify-between w-full text-custom_purple"
                >
                  Donasi
                </a>
              </li>
            </ul>
            <ul className="flex flex-col px-8 text-custom_purple font-medium gap-6 py-8 border-b-[0.2px] border-gray-300">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Berita</a>
              </li>
              <li>
                <a href="#">Kejuaraan</a>
              </li>
            </ul>
            <ul className="text-custom_purple ri-lg flex items-center px-8 gap-6 py-8 border-b-[0.2px] border-gray-300">
              <li>
                <a href="#">
                  <i className="ri-youtube-fill"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-tiktok-fill"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="flex items-center px-8 text-custom_purple gap-2 py-8"
            >
              <i className="ri-user-5-line"></i>
              <span className="font-semibold">Login</span>
            </a>
          </div>
        </aside>
      </header>
    </>
  );
}

export default Hero;
