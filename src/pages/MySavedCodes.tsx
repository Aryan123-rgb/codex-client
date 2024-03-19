import { useGetAllCodesQuery } from "@/redux/slices/api";
import { useNavigate } from "react-router-dom";

function MySavedCodes() {
  const { data } = useGetAllCodesQuery();
  const codesData = data?.data;
  console.log(data);
  const navigate = useNavigate();

  const techData = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML, CSS, JS",
      language: "HTML, CSS, JS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "Javascript",
      language: "Javascript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      alt: "C++",
      language: "C++",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "Java",
      language: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python",
      language: "Python",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-4">My Saved Codes</h1>
      <div className="flex flex-wrap gap-6">
        {codesData?.length ? (
          codesData.map((code, index) => {
            const matchingTech = techData.find(
              (tech) => tech.language === code.language
            );

            return (
              <div
                key={index}
                className="border border-white p-4 rounded-md shadow-md cursor-pointer"
                onClick={() => navigate(code._id)}
              >
                {matchingTech && (
                  <>
                    <img
                      src={matchingTech.src}
                      alt={matchingTech.alt}
                      style={{ width: "150px", height: "150px" }}
                    />
                    <h2 className="text-xl font-bold mb-2 text-center">
                      {code.title}
                    </h2>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <h1>No Saved Codes</h1>
        )}
      </div>
    </div>
  );
}

export default MySavedCodes;
