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
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default TableContainer;
