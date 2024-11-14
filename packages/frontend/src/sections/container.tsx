import { Card, CardHeader, CardContent } from "@mui/material";
import PageTitle from "../components/page-title";
import { ReactNode } from "react";

type ContainerProps = {
  title: string;
  children: ReactNode;
};

const Container = ({ title, children }: ContainerProps) => {
  return (
    <section className="w-full">
      <Card sx={{ width: "100%", pt: "1.5rem", ms: "5rem" }}>
        <CardHeader title={<PageTitle text={title} />} sx={{ paddingLeft: "2rem" }} />
        <CardContent>
          <div className="px-5">{children}</div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Container;
