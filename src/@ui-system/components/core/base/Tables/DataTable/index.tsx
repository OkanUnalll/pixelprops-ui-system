import styled from 'styled-components';

import cssProps from '@root/theme/functions/cssProps';
import type { ICSSProps } from '@root/models/theme/cssprops';

import { Table, TableData, TableHead, TableHeadData, TableRow, TableBody } from '@root/elements/Tables/Table';

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