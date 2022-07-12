import _ from 'lodash';
import { Text, Column } from 'src/components';
import { TableProps } from 'src/types';
import { Pagination, TableContainer, TableContent } from './styled';
import { PaginationComp } from '../Pagination';


export const Table = <T extends Record<string,unknown>>({
  data,
  columns,
  pagination,
  handleGoToPage,
  ...props
}: TableProps<T>) => {
  return (
    <Column gap={1}>
      <TableContainer>
        <TableContent {...props}>
          <table>
            <thead>
              <tr>
                {columns.map(({ title }, index) => (
                  <th key={index + title}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => {
                return (
                  <tr key={`${i}table-body`}>
                    {columns.map(({ dataIndex, render }, j) => {
                      const value = _.get(row, dataIndex, '') as T[keyof T];
                      return (
                        <td key={`${j}table-data`}>
                          {render ? render(value, row) : `${value}`}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContent>
        {!pagination && (
          <Pagination>
            <span>
              Has <Text weight="bold">{data.length}</Text> item(s).
            </span>
          </Pagination>
        )}
        {pagination && <PaginationComp {...{ pagination, handleGoToPage }} />}
      </TableContainer>
    </Column>
  );
};
