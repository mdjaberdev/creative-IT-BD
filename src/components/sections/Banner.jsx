import Container from "../Container";
import Flex from "../Flex";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Images from "../Images";
import bannerImg from "/src/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-200 py-7 font-poppins">
      <Container>
        <Flex>
          <div className="">
            <div className="flex items-center gap-x-1">
              <IoShieldCheckmarkSharp className="text-red-400" />
              <h4 className="text-secondary">Unleash Your Potential</h4>
            </div>
            <h1 className="text-[45px] text-secondary font-bold w-125 leading-14 my-5">
              Become an IT Pro & Rule the
              <span className="bg-linear-to-r from-[#FF1E1E] to-[#FF8079] bg-clip-text text-transparent ml-3">
                Digital World
              </span>
            </h1>
            <p className="text-sm text-gray-700 font-light w-105 leading-6 ">
              With a vision to turn manpower into assets, Creative IT Institute
              is ready to enhance your learning experience with skilled mentors
              and an updated curriculum. Pick your desired course from more than
              45 trendy options.
            </p>
          </div>
          <div className="">
            <Images srcImg={bannerImg} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
