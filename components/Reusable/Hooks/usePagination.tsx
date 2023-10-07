"use client";
import { useState } from "react";

const usePagination = (initialItemsPerPage: number, initialData: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * initialItemsPerPage;
  const endIndex = startIndex + initialItemsPerPage;
  const currentItems = initialData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(initialData.length / initialItemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
