import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { SecurityFrontendType } from "../types/securities-types";
import Symbol from "../components/symbol";
import Trend from "../components/trend";

type SecurityTableProps = {
  data: SecurityFrontendType[];
};

const SecuritiesTable = ({ data }: SecurityTableProps) => {

  const tableColumns: GridColDef[] = [
  {
    field: "ticker",
    headerName: "Symbol",
    flex: 0.2,
    sortable: true,
    headerClassName: "custom-header",
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}>
        <Symbol text={params.value} />
      </div>
    ),
  },
  {
    field: "securityName",
    headerName: "Name",
    flex: 0.5,
    sortable: true,
    headerClassName: "custom-header",
    renderCell: (params) => (
      <div
        style={{
          fontWeight: 600,
        }}>
        {params.value}
      </div>
    ),
  },
  {
    field: "sector",
    headerName: "Sector",
    flex: 0.3,
    sortable: true,
    headerClassName: "custom-header",
  },
  {
    field: "country",
    headerName: "Country",
    flex: 0.25,
    sortable: true,
    headerClassName: "custom-header",
  },
  {
    field: "trend",
    headerName: "Trend",
    flex: 0.15,
    sortable: true,
    headerClassName: "custom-header",
    renderCell: (params) => (
      <div className="w-full h-full flex items-center">
        <Trend trend={params.value} />
      </div>
    ),
  },
];


  const paginationModel = { page: 0, pageSize: 30 };

  const navigate = useNavigate();
  const handleOnClick = (rowData: SecurityFrontendType) => {
    navigate(`/security-detail/${rowData.ticker}`);
  };

  return (
    <section className="w-full">
      <Paper sx={{ height: "auto", width: "100%", px: "2rem", py: "1rem", overflow: "visible" }}>
        <div style={{ height: "100%" }}>
          <DataGrid
            rows={data}
            columns={tableColumns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 20, 30]}
            onRowClick={(event: GridRowParams) => handleOnClick(event.row as SecurityFrontendType)}
            sx={{
              border: 0,
              overflow: "visible",
              width: "100%",
              "& .custom-header": {
                fontSize: "0.75rem",
              },
            }}
          />
        </div>
      </Paper>
    </section>
  );
};

export default SecuritiesTable;
