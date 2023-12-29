export default function InputBox({ ph, iconImg }) {
  return (
    <div className="flex w-80 h-10 border border-gray-300">
      <div className="w-10 h-full bg-gray-100 border-r border-gray-300">
        <div className="w-full h-full flex justify-center items-center text-gray-400">
          {iconImg}
        </div>
        {/* <IconImg className="h-full text-gray-400 m-auto" size="20" /> */}
      </div>
      <input className="px-2 text-sm" type="text" placeholder={ph} />
    </div>
  );
}
