import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

type PaginationProps<T> = {
  data: T[];
  postsPerPage: number;
  setCurrentPageData: (currentPageData: T[]) => void;
};

export default function Pagination<T>({
  data,
  postsPerPage,
  setCurrentPageData,
}: PaginationProps<T>) {
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(data.length / postsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const startIndex = pageNumber * postsPerPage;
    const currentPageData = data.slice(startIndex, startIndex + postsPerPage);
    setCurrentPageData(currentPageData);
  }, [pageNumber, data, postsPerPage, setCurrentPageData]);

  return (
    <div className="mt-4">
      <div className="flex justify-end items-center">
        <div className="py-2 px-4 bg-white shadow-xl">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={changePage}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName="flex justify-center items-center gap-6"
            pageClassName="px-2"
            activeClassName="bg-primary text-white"
            previousClassName="px-2"
            nextClassName="px-2"
            disabledClassName="opacity-50 cursor-not-allowed bg-gray-400 text-black font-extrabold"
          />
        </div>
      </div>
    </div>
  );
}
