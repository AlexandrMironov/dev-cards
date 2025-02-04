import { Box } from "@mui/material";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  topContent?: React.ReactNode;
  backgroundColor?: string | null;
  isShowMenu?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  headerContent,
  topContent,
  backgroundColor = "linear-gradient(to bottom, rgba(18, 26, 32, 1) 0%,rgba(45, 34, 45, 1) 100%)",
  isShowMenu = true,
}) => (
  <Box
    sx={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background:
        backgroundColor ??
        "linear-gradient(to bottom, rgba(18, 26, 32, 1) 0%,rgba(45, 34, 45, 1) 100%)",
      position: "relative",
    }}
  >
    {headerContent && (
      <Box
        sx={{
          width: "100%",
          px: 2,
          py: 2,
          zIndex: 100,
        }}
      >
        {headerContent}
      </Box>
    )}
    {topContent && (
      <Box
        sx={{
          flexShrink: 0,
        }}
      >
        {topContent}
      </Box>
    )}
    <Box
      sx={{
        flex: 1,
        px: 2,
        pt: headerContent ? "60px" : 0,
        pb: isShowMenu ? "82px" : 0,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        justifyContent: "flex-start",
      }}
    >
      {children}
    </Box>
  </Box>
);
