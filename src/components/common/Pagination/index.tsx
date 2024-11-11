import styled from '@emotion/styled';
import Flex from '../Flex';

const DEFAULT_PADDING = { padding: '24px 0' };

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => onPageChange(page);

  return (
    <Flex justifyContent="center" alignItems="center" css={DEFAULT_PADDING}>
      <NavButton onClick={handlePrevious} disabled={currentPage === 0}>
        &laquo; Previous
      </NavButton>
      {[...Array(totalPages)].map((_, index) => {
        const page = index;
        return (
          <PageButton key={page} onClick={() => handlePageClick(page)} isActive={page === currentPage}>
            {page + 1}
          </PageButton>
        );
      })}
      <NavButton onClick={handleNext} disabled={currentPage === totalPages - 1}>
        Next &raquo;
      </NavButton>
    </Flex>
  );
}

const NavButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #007bff;
  background-color: transparent;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    color: #aaa;
    border-color: #aaa;
    cursor: not-allowed;
  }
`;

const PageButton = styled(NavButton)<{ isActive: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  background-color: ${({ isActive }) => (isActive ? '#007bff' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#007bff')};
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
`;
