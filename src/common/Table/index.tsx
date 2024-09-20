import { FC } from "react";
import Table from "react-bootstrap/Table";

interface Props {
  column: Array<string>;
  data: Array<any>;
}

const CustomTable: FC<Props> = ({ column, data }) => {
  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {column.map((item: string) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </Table>
    </>
  );
};

export default CustomTable;
