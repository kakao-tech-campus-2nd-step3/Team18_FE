import { useFetchRecruitments } from '@/apis/home/hooks/queries/useFetchRecruitments';
import { useState } from 'react';

export function useRecruitmentData(initialFilter = 'all', initialPage = 1) {
  const [filter, setFilter] = useState(initialFilter);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(5);

  const { data: recruitmentList } = useFetchRecruitments(filter, page);

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    recruitmentList,
    page,
    totalPages,
    setTotalPages,
    handleFilterChange,
    handlePageChange,
  };
}
