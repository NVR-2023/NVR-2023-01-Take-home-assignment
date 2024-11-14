import { useState, useEffect } from "react";
import { Snackbar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ErrorToastWithRedirectProps = {
  redirectUrl: string;
  errorMessage: string;
};

const ErrorToastWithRedirect = ({ redirectUrl, errorMessage }: ErrorToastWithRedirectProps) => {
  const TIME_TOAST_IS_SHOWN = 3000;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleOnClose = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectUrl);
    }, TIME_TOAST_IS_SHOWN);

    return () => clearTimeout(timer);
  }, [navigate, redirectUrl]);

  return (
    <Snackbar
      className="rounded"
      open={isOpen}
      autoHideDuration={TIME_TOAST_IS_SHOWN}
      onClose={handleOnClose}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(100%, -50%)",
        backgroundColor: "#fc4503",
        padding: "1rem 2rem",
        boxShadow: 3,
        height: "7rem",
        width: "20rem",
      }}>
      <Box>
        <p>{errorMessage}</p>
        <p>Redirecting…</p>
      </Box>
    </Snackbar>
  );
};

export default ErrorToastWithRedirect;
