import styled from 'styled-components';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

import { Table, TableData, TableHead, TableHeadData, TableRow, TableBody } from 'ui-system/components/Table';

interface Column {
  field: string;
  headerTitle: string;
  width: string;
}

interface DataTableTemplateProps {
  columns?: Column[];
  rows?: any[];
  className?: string;
};

function DataTableTemplate({ columns, rows, className }: DataTableTemplateProps) {
  return (
    <Table $variant="widget" className={className}>
      <TableHead>
        <TableRow>
            <TableHeadData>Name</TableHeadData>
            <TableHeadData>Surname</TableHeadData>
            <TableHeadData>Age</TableHeadData>
            <TableHeadData>School</TableHeadData>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
            <TableData>Okan</TableData>
            <TableData>Ünal</TableData>
            <TableData>20</TableData>
            <TableData>ITU</TableData>
        </TableRow>
        <TableRow>
            <TableData>Okan</TableData>
            <TableData>Ünal</TableData>
            <TableData>20</TableData>
            <TableData>ITU</TableData>
        </TableRow>
        <TableRow>
            <TableData>Okan</TableData>
            <TableData>Ünal</TableData>
            <TableData>20</TableData>
            <TableData>ITU</TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

interface DataTableProps extends ICSSProps {}

const DataTable = styled(DataTableTemplate)<DataTableProps>`
  ${props => cssProps(props)}
`;

export { DataTable };