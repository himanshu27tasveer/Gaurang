import Image from "next/image";

const Header = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "rgb(34, 34, 34)",
        zIndex: 1000,
      }}
      className="flex justify-between items-center"
    >
      <div className="w-3/12">
        <Image src="/assets/logo2.png" width={100} height={100} alt={""} />
      </div>
      <div className="w-9/12 mr-4 flex justify-end items-center">
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a href="#contact">Contact</a>
          </span>
        </button>
        <a className="custom-link" href="#projects">
          Projects
        </a>
        <a className="custom-link" href="#experience">
          Experience
        </a>
      </div>
    </div>
  );
};

export default Header;
