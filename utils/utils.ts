import { TableData } from "../components/Table/Table";

interface CreateTableDataProps {
  headValues: string[];
  bodyValues: string[][];
  tableTitle: string;
}

export const createTableData = ({
  headValues,
  bodyValues,
  tableTitle,
}: CreateTableDataProps): TableData => {
  return {
    head: {
      keys: headValues,
    },
    body: {
      values: bodyValues,
    },
    tableTitle,
  };
};
