import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { SecurityFrontendType } from "../types/securities-types";

const Symbol = ({ ticker }: { ticker: string }) => <strong>{ticker}</strong>; // Updated to 'ticker'

const Trend = ({ trend }: { trend: number }) => (
  <span style={{ color: trend > 0 ? "green" : "red" }}>{trend > 0 ? "↑" : "↓"}</span>
);

const columns: GridColDef[] = [
  {
    field: "ticker", // Updated to 'ticker'
    headerName: "Ticker", // Updated label to 'Ticker'
    width: 120,
    sortable: true,
    renderCell: (params) => <Symbol ticker={params.value} />, // Updated to 'ticker'
  },
  {
    field: "securityName", // Updated to 'securityName'
    headerName: "Security Name", // Updated label to 'Security Name'
    width: 200,
    sortable: true,
  },
  {
    field: "sector",
    headerName: "Sector",
    width: 200,
    sortable: true,
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
    sortable: true,
  },
  {
    field: "trend",
    headerName: "Trend",
    width: 180,
    sortable: true,
    renderCell: (params) => <Trend trend={params.value} />,
  },
];

const rows: SecurityFrontendType[] = [
  { id: 1, ticker: "AAPL", securityName: "Apple", sector: "Technology", country: "USA", trend: 1 },
  { id: 2, ticker: "TSLA", securityName: "Tesla", sector: "Automotive", country: "USA", trend: -1 },
  { id: 3, ticker: "AMZN", securityName: "Amazon", sector: "Retail", country: "USA", trend: 1 },
  {
    id: 4,
    ticker: "GOOGL",
    securityName: "Alphabet",
    sector: "Technology",
    country: "USA",
    trend: 1,
  },
  {
    id: 5,
    ticker: "MSFT",
    securityName: "Microsoft",
    sector: "Technology",
    country: "USA",
    trend: -1,
  },
  {
    id: 6,
    ticker: "BABA",
    securityName: "Alibaba",
    sector: "E-commerce",
    country: "China",
    trend: 1,
  },
  {
    id: 7,
    ticker: "NFLX",
    securityName: "Netflix",
    sector: "Entertainment",
    country: "USA",
    trend: -1,
  },
  {
    id: 8,
    ticker: "SNE",
    securityName: "Sony",
    sector: "Entertainment",
    country: "Japan",
    trend: 1,
  },
  {
    id: 9,
    ticker: "DIS",
    securityName: "Disney",
    sector: "Entertainment",
    country: "USA",
    trend: 1,
  },
  // More rows can follow...
];

const SecuritiesTable = () => {
  const navigate = useNavigate();

  const handleOnClick = (rowData: SecurityFrontendType) => {
    navigate(`/symbol/${rowData.ticker}`); 
  };

  return (
    <Paper sx={{ height: "auto", width: "100%", px: "2rem", py: "1rem", overflow: "visible" }}>
      <div style={{ height: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={(e: GridRowParams) => handleOnClick(e.row as SecurityFrontendType)} // Handle row click
          sx={{
            border: 0,
            overflow: "visible",
            width: "100%",
          }}
        />
      </div>
    </Paper>
  );
};

export default SecuritiesTable;
