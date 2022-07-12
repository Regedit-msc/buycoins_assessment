import { PaginationCompProps } from 'src/types';
import { useMemo } from 'react';
import { RightArrow, LeftArrow } from 'src/assets/icons';
import { Pagination, PageButtons, Pages } from './styled';

export const PaginationComp = ({
  pagination,
  handleGoToPage,
}: PaginationCompProps) => {
  const totalPageCount = useMemo(() => {
    if (!pagination) return 1;
    if (!pagination?.total) return 1;
    return Math.ceil(pagination?.total / pagination?.size);
  }, [pagination]);
  return (
    <Pagination>
      {/* <span>Showing 1-10</span> */}
      <Pages>
        <PageButtons
          onClick={() => {
            if (!handleGoToPage) return;
            handleGoToPage(pagination.page - 1);
          }}
          disabled={pagination.page === 1}
          isPrevOrNext
          variant="text"
          color="grey"
        >
          <LeftArrow />
        </PageButtons>
        {[...Array(totalPageCount)].map((page, index) => {
          const pageNumber = index + 1;
          const isCurrentPage = pageNumber === pagination.page;
          const shouldRender =
            Math.abs(pageNumber - pagination.page) <= 2 ||
            pageNumber === 1 ||
            pageNumber === pagination.total;
          const renderEllipsis =
            Math.abs(pageNumber - pagination.page) === 3 &&
            pageNumber !== 1 &&
            pageNumber !== pagination.total;

          if (renderEllipsis) {
            return (
              <PageButtons variant="text" color="grey" key={index}>
                ...
              </PageButtons>
            );
          }

          if (!shouldRender) {
            return null;
          }

          return (
            <PageButtons
              onClick={() => {
                if (!handleGoToPage) return;
                if (isCurrentPage) return;
                handleGoToPage(pageNumber);
              }}
              variant={isCurrentPage ? 'solid' : 'text'}
              background={isCurrentPage ? 'green' : 'grey'}
              key={index}
            >
              {pageNumber}
            </PageButtons>
          );
        })}
        <PageButtons
          isPrevOrNext
          variant="text"
          background="blue"
          onClick={() => {
            if (!handleGoToPage) return;
            handleGoToPage(pagination.page + 1);
          }}
          disabled={pagination.page === pagination.total}
        >
          <RightArrow />
        </PageButtons>
      </Pages>
    </Pagination>
  );
};
