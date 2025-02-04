import { ReactElement } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface IRequestWrapperProps {
  isLoading: boolean;
  isError: boolean;
  dataLength?: number;
  children: ReactElement;
  isArray?: boolean;
}

export const RequestWrapper = ({
  isLoading,
  isError,
  dataLength = 0,
  children,
  isArray = true,
}: IRequestWrapperProps): JSX.Element => {
  const elContent = () => {
    if (isLoading) {
      return <CircularProgress size={24} />;
    }

    if (isError) {
      return <Typography>server error</Typography>;
    }

    if (isArray && !dataLength) {
      return (
        <Box display="flex">
          <Typography>no todos</Typography>
        </Box>
      );
    }
  };

  return elContent() ? (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {elContent()}
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};
