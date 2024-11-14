import { Card, CardHeader, CardContent } from "@mui/material";
import ContainerTitle from "../components/container-title";
import { ReactNode } from "react";

type TableContainerProps = {
  title: string;
  children: ReactNode;
};

const TableContainer = ({ title, children }: TableContainerProps) => {
  return (
    <Card sx={{ pt: "1.5rem", ms: "5rem" }}>
      <CardHeader title={<ContainerTitle text={title} />} sx={{ paddingLeft: "2rem" }} />
      <CardContent>
        <div className="px-5">{children}</div>
      </CardContent>
    </Card>
  );
};

export default TableContainer;
