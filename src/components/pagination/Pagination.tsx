import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../atoms/buttons/Button";
import Text from "../atoms/Text/Text";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const pageArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <div className="bg-white shadow-lg  h-[50px] overflow-hidden max-w-[400px] flex items-center space-x-2">
        <Button
          onClick={handlePrevious}
          isDisabled={currentPage === 1}
          theme="white"
        >
          <FaChevronLeft className="text-gray-700" />
        </Button>
        <div className="flex gap-[16px]">
          {pageArray.map((page) => (
            <div key={page}>
              {page % 4 === 0 ? (
                <div
                  onClick={() => setCurrentPage(page)}
                  className={`px-[8px] py-[6px] hover:bg-primary hover:text-white ${
                    page === currentPage
                      ? "bg-primary text-white cursor-pointer"
                      : "text-[#555454]"
                  }`}
                >
                  <Text
                    className="text-[12px] cursor-pointer"
                    text={`${page}`}
                  />
                </div>
              ) : (
                <div className="px-[8px] py-[6px]">
                  <Text className="text-[12px] cursor-pointer" text="..." />
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
          theme="white"
        >
          <FaChevronRight className="text-gray-700" />
        </Button>
      </div>
    </div>
  );
}
