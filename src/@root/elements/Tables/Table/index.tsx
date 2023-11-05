import styled from 'styled-components';
import CSS from 'csstype';

import { colors, typography } from '@root/theme';

/**
 * for examples: https://www.w3schools.com/css/tryit.asp?filename=trycss_table_fancy
 *               https://www.htmlgoodies.com/html5/advanced-html-table-features/
*/

interface CustomCSS {
  $css?: string;  
}

// Data
interface TableHeadDataProps extends CustomCSS {
  $textAlign?: CSS.Property.TextAlign;
}

const TableHeadData = styled.th<TableHeadDataProps>`
  padding: 1rem 2rem;
  font-size: ${typography.h5.fontSize};
  font-weight: 500;
  color: ${colors.grey.main};
  cursor: default;

  text-align: ${props => props.$textAlign ?? 'left'};

  // Custom CSS
  ${props => props.$css}
`;

const TableData = styled.td<CustomCSS>`
  padding: 1rem 2rem;
  font-size: ${typography.text.fontSize};

  // Custom CSS
  ${props => props.$css}
`;

// Row
const TableRow = styled.tr<CustomCSS>`
  border-bottom: 1px solid ${colors.grey2.main};
  transition: all .3s ease;

  &:nth-last-child(1) {
    border-bottom: none;
  }

  // Custom CSS
  ${props => props.$css}
`;

// Groupers
const TableHead = styled.thead<CustomCSS>`
  border-bottom: 1px solid ${colors.grey2.main};

  // Custom CSS
  ${props => props.$css}
`;

const TableBody = styled.tbody<CustomCSS>`
  ${TableRow}:hover {
    background-color: ${colors.grey2.main};
  }

  // Custom CSS
  ${props => props.$css}
`;

const TableFooter = styled.tfoot<CustomCSS>``;

// Wrapper
interface TableProps extends CustomCSS {
  $variant?: 'widget' | 'default';
}

const Table = styled.table<TableProps>`
  overflow: hidden;
  position: relative;
  border-collapse: collapse;
  width: 100%;

  // Variant
  ${props => {
    const variant = props.$variant;

    if (variant === 'default' || !variant) return `
      background-color: transparent;
    `;

    if (variant === 'widget') return `
      background-color: ${colors.dark2.main};
      border-radius: 12px;
    `;
  }}

  // Custom CSS
  ${props => props.$css}
`;

export {
    Table,
    TableHead,
    TableHeadData,
    TableBody,
    TableFooter,
    TableRow,
    TableData,
};