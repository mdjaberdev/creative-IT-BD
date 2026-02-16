import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import btnIcon from "/src/assets/haderBtnIcon.png";

const Header = () => {
  return (
    <div className="font-poppins">
        {/* HeaderTop Part  */}
      <div className="bg-[linear-gradient(to_left,#f87171_0%,#ef4444_59%)] py-2">
        <Container>
          <Flex className={"gap-x-15"}>
            <div className="text-white text-base font-medium flex items-center gap-x-2">
              <FaPhone />
              <p> 01777308777</p>
            </div>
            <div className="text-white text-base font-medium flex items-center gap-x-2">
              <IoMdMail />
              <marquee> info@creativeitinstitute.com</marquee>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part  */}
    <div className="bg-gray-200">
          <Container>
        <Flex className={"py-7.5 justify-between "}>
          <div className="ml-8">
            <Images srcImg={logo} />
          </div>
          <div className="flex items-center gap-x-7.5">
            <nav>
              <ul className="text-secondary text-[18px] font-bold flex gap-x-7.5 ">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Success story</Link>
                </li>
                <li>
                  <Link>Diploma</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </nav>
            <Link>
              <div className="bg-[linear-gradient(to_left,#f87171_0%,#ef4444_59%)] py-3.25 px-6.5 text-white text-[18px] font-bold flex items-center gap-x-3 rounded-xl">
                <Images srcImg={btnIcon} />
                <button>Browse Course</button>
              </div>
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
    </div>
  );
};

export default Header;
