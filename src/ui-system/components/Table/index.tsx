import styled from 'styled-components';
import CSS from 'csstype';

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
  font-size: ${props => props.theme.typography.h5.fontSize};
  font-weight: 500;
  cursor: default;
  text-align: ${props => props.$textAlign ?? 'left'};

  color: ${props => props.theme.colors.grey.main};

  // Custom CSS
  ${props => props.$css}
`;

const TableData = styled.td<CustomCSS>`
  padding: 1rem 2rem;
  font-size: ${props => props.theme.typography.text.fontSize};

  color: ${props => {
    const theme = props.theme.mode;
    
    return theme === 'light' ? props.theme.colors.dark.main : props.theme.colors.white.main;
  }};

  // Custom CSS
  ${props => props.$css}
`;

// Row
const TableRow = styled.tr<CustomCSS>`
  border-bottom: 1px solid ${props => props.theme.mode === 'light' ? props.theme.colors.grey.light : props.theme.colors.grey.dark};
  transition: all .3s ease;

  &:nth-last-child(1) {
    border-bottom: none;
  }

  // Custom CSS
  ${props => props.$css}
`;

// Groupers
const TableHead = styled.thead<CustomCSS>`
  border-bottom: 1px solid ${
    props => props.theme.mode === 'light' ? props.theme.colors.grey.light : props.theme.colors.grey.dark
  };

  // Custom CSS
  ${props => props.$css}
`;

const TableBody = styled.tbody<CustomCSS>`
  ${TableRow}:hover {
    background-color: ${
      props => props.theme.mode === 'light' ? props.theme.colors.grey.light : props.theme.colors.grey.dark
    };
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
    const theme = props.theme.mode;

    if (variant === 'default' || !variant) return `
      background-color: transparent;
    `;

    if (variant === 'widget') return `
      background-color: ${theme === 'light' ? props.theme.colors.white.main : props.theme.colors.dark.light};
      border-radius: 12px;
      ${theme === 'light' ? `box-shadow: ${props.theme.boxShadow.xs};` : ''}
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