import InputBox from "./InputBox";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import Logo from "./assets/logo.png";

export default function Register() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" max-w-sm w-full h-full flex flex-col justify-center items-center space-y-8">
        <div className="h-16">
          <img className="h-full" src={Logo} alt="logo" />
        </div>
        <div className=" w-full flex  justify-start text-gray-700 px-8">
          회원정보를 입력해주세요
        </div>
        <div className="flex flex-col space-y-4">
          <InputBox ph="아이디(이메일)" iconImg={<MdOutlineEmail />} />
          <InputBox ph="비밀번호" iconImg={<RiLockPasswordLine />} />
          <InputBox ph="비밀번호 확인" iconImg={<RiLockPasswordLine />} />
          <InputBox ph="이름" iconImg={<IoPersonOutline />} />
          <InputBox ph="휴대폰 번호" iconImg={<CiMobile1 />} />
        </div>
        {/* 동의화면 */}
        <div className="w-full px-8 space-x-2 text-gray-700">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">모두 확인하였으며 동의합니다.</label>
        </div>
        <div>
          <button className="bg-blue-500 py-3 font-bold w-[320px] text-white">
            동의하고 가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
