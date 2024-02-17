export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-60px)] text-white flex justify-center items-center flex-col gap-3">
      <h1 className="text-6xl font-bold text-center">WD Compiler</h1>
      <p className="text-gray-500 text-center">
        Compiler HTML, CSS, JavaScript Code on the go and share it with your
        friends
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="border border-white p-4 rounded-md shadow-md">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML, CSS, JS"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="text-xl font-bold mb-2 text-center">HTML, CSS, JS</h2>
        </div>
        <div className="border border-white p-4 rounded-md shadow-md">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="HTML, CSS, JS"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="text-xl font-bold mb-2 text-center">Javascript</h2>
        </div>
        <div className="border border-white p-4 rounded-md shadow-md">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="text-xl font-bold mb-2 text-center">C++</h2>
        </div>
        <div className="border border-white p-4 rounded-md shadow-md">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="text-xl font-bold mb-2 text-center">Java</h2>
        </div>
        <div className="border border-white p-4 rounded-md shadow-md">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="text-xl font-bold mb-2 text-center">Python</h2>
        </div>
      </div>
    </div>
  );
}
