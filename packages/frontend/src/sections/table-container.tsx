import { Card, CardHeader, CardContent } from "@mui/material";
import { ReactNode } from "react";

type TableContainerProps = {
  title: string;
  children: ReactNode;
};

const TableContainer = ({ title, children }: TableContainerProps) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <div className="px-5">{children}</div>
      </CardContent>
    </Card>
  );
};

export default TableContainer;
