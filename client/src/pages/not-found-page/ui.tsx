import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import { PageLayout } from "shared/ui/page-layout";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <PageLayout>
      <Box
        display="flex"
        height="calc(100vh - 90px)"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={2}
      >
        <Typography variant="h2" sx={{ fontWeight: "600" }} gutterBottom>
          Not found
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleGoToHome}
        >
          Back home
        </Button>
      </Box>
    </PageLayout>
  );
};
