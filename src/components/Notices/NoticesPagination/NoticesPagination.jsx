import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import { getNotices } from 'redux/notices/noticesSelectors';

export const NoticesPagination = () => {
  const { total } = useSelector(getNotices).notices;
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(
      getNoticeByCategory({
        category: categoryName,
        page: page,
        limit: 10,
      })
    );
  }, [categoryName, dispatch, page]);

  return (
    <div>
      {total > 10 ? (
        <PaginationControl
          page={page}
          between={4}
          total={total}
          limit={10}
          changePage={page => {
            setPage(page);
            console.log(page);
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};