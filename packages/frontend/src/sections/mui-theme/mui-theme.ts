// theme.ts

import { createTheme } from "@mui/material/styles";

// Create a MUI theme with CSS variables
const theme = createTheme({
  components: {
    // Add the MuiDataGrid customizations
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5", // Background color for the table
          color: "#333", // Text color for the table
        },
        columnHeaders: {
          backgroundColor: "#e0e0e0", // Header background color
          color: "#000", // Header text color
          fontWeight: "bold",
        },
        cell: {
          color: "#444", // Cell text color
        },
        row: {
          "&:hover": {
            backgroundColor: "#dfe6e9", // Row hover effect
          },
        },
        footerContainer: {
          backgroundColor: "#e8e8e8", // Footer background color
          color: "#000", // Footer text color
        },
      },
    },
  },
});

export default theme;
