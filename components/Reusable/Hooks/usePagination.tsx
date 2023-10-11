"use client";
import { useEffect, useState } from "react";

const usePagination = (
  initialItemsPerPage: number,
  initialData: any,
  totalItems: number
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<any>();
  const startIndex = (currentPage - 1) * initialItemsPerPage;
  const endIndex = startIndex + initialItemsPerPage;
  const totalPages = Math.ceil(totalItems / initialItemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentItems(initialData);
  }, [initialData]);

  return {
    startIndex,
    endIndex,
    currentPage,
    currentItems,
    totalPages,
    handlePageChange,
  };
};

export default usePagination;
