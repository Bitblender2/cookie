import image from "./assets/logo.png";
function App() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-gray-200 justify-center items-center flex p-4">
        <div className="lg:w-[20%] lg:h-[40vh] relative bg-white flex flex-col justify-center items-center rounded-lg shadow-lg p-5 gap-5">
          <button className="absolute top-3 right-4 text-3xl text-gray-600">
            &times;
          </button>
          <img src={image} alt="logo" className="w-[40%]" />
          <p className="text-center w-[65%] text-[0.9rem]">
            Our website uses cookies to ensure you get the best expriemce while
            your here
          </p>
          <button className="bg-green-500 text-white border-none w-[70%] py-2 text-xl">
            Okay
          </button>
          <p className="text-gray-700 font-semibold">LEARN MORE</p>
        </div>
      </div>
    </>
  );
}

export default App;
