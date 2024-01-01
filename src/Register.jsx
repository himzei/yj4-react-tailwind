import InputBox from "./InputBox";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import Logo from "./assets/logo.png";
import { useState } from "react";

export default function Register() {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    mobile: "",
  });
  const { email, password, password2, name, mobile } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    setShow(true);
  };
  return (
    <div className="w-full py-16 space-y-16 flex flex-col justify-center items-center">
      <div className=" max-w-sm w-full h-full flex flex-col justify-center items-center space-y-8">
        <div className="h-16">
          <img className="h-full" src={Logo} alt="logo" />
        </div>
        <div className=" w-full flex  justify-start text-gray-700 px-8">
          회원정보를 입력해주세요
        </div>
        <div className="flex flex-col space-y-4">
          <InputBox
            name="email"
            ph="아이디(이메일)"
            iconImg={<MdOutlineEmail />}
            onChange={onChange}
            value={email}
          />
          <InputBox
            name="password"
            ph="비밀번호"
            iconImg={<RiLockPasswordLine />}
            onChange={onChange}
            value={password}
          />
          <InputBox
            name="password2"
            ph="비밀번호 확인"
            iconImg={<RiLockPasswordLine />}
            onChange={onChange}
            value={password2}
          />
          <InputBox
            name="name"
            ph="이름"
            iconImg={<IoPersonOutline />}
            onChange={onChange}
            value={name}
          />
          <InputBox
            name="mobile"
            ph="휴대폰 번호"
            iconImg={<CiMobile1 />}
            onChange={onChange}
            value={mobile}
          />
        </div>
        {/* 동의화면 */}
        <div className="w-full px-8 space-x-2 text-gray-700">
          <input type="checkbox" id="checkbox" />
          <label onClick={() => setChecked(!checked)} htmlFor="checkbox">
            모두 확인하였으며 동의합니다.
          </label>
        </div>
        <div>
          <button
            onClick={onClick}
            disabled={checked ? false : true}
            className={`bg-blue-500 py-3 font-bold w-[320px] text-white ${
              checked ? "bg-blue-500" : "bg-blue-200"
            }`}
          >
            동의하고 가입하기
          </button>
        </div>
      </div>
      {/* 결과화면 */}
      {show && (
        <div className="max-w-xs flex flex-col items-center w-full shadow-sm">
          <div className="py-2 font-semibold text-xl">전송데이터</div>
          <div className="w-full">
            <ul className="space-y-4 py-4 w-full px-4">
              <li className="flex border-b border-gray-300 py-1">
                <span className="w-28 ">이메일: </span>
                <span>{form.email}</span>
              </li>
              <li className="flex border-b border-gray-300 py-1">
                <span className="w-28 ">패스워드: </span>
                <span>{form.password}</span>
              </li>
              <li className="flex border-b border-gray-300 py-1">
                <span className="w-28 ">패스워드 확인: </span>
                <span>{form.password2}</span>
              </li>
              <li className="flex border-b border-gray-300 py-1">
                <span className="w-28 ">이름: </span>
                <span>{form.name}</span>
              </li>
              <li className="flex border-b border-gray-300 py-1">
                <span className="w-28 ">모바일: </span>
                <span>{form.mobile}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
