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
        <div className="pb-4 px-4 bg-white shadow-xl">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={changePage}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName="flex justify-center items-center gap-2 mt-4"
            pageClassName="px-2 py-1 border border-gray-400 rounded"
            activeClassName="bg-primary text-white"
            previousClassName="px-2 py-1 border border-gray-400 rounded"
            nextClassName="px-2 py-1 border border-gray-400 rounded"
            disabledClassName="opacity-50 cursor-not-allowed bg-gray-400 text-black font-extrabold"
          />
        </div>
      </div>
    </div>
  );
}
