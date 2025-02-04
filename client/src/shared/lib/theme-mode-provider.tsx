import React, { useMemo, PropsWithChildren } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
} from "@mui/material";
import { getDesignTokens } from "./theme";

export const ThemeModeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const theme = useMemo(() => createTheme(getDesignTokens()), []);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
