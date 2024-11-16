import { useState, useEffect, ReactNode } from "react";
import { Snackbar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ErrorToastWithRedirectProps = {
  redirectUrl?: string;
  message: string | ReactNode;
  type: "error" | "info" | "loader";
};

const ToastWithOptionalRedirect = ({ redirectUrl, message, type }: ErrorToastWithRedirectProps) => {
  const TIME_TOAST_IS_SHOWN = 3000;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "loader") return;

    const timer = setTimeout(() => {
      if (redirectUrl) {
        navigate(redirectUrl);
      } else {
        setIsOpen(false);
      }
    }, TIME_TOAST_IS_SHOWN);

    return () => clearTimeout(timer);
  }, [type, navigate, redirectUrl]);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={TIME_TOAST_IS_SHOWN}
      onClose={() => setIsOpen(false)}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: type === "error" ? "#fc4503" : "#ffea99",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(100%, -50%)",
          color: "#000",
          padding: "1rem 2rem",
          boxShadow: 3,
          borderRadius: ".5rem",
          textAlign: "center",
        },
      }}>
      <Box>
        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>{message}</p>
      </Box>
    </Snackbar>
  );
};

export default ToastWithOptionalRedirect;
