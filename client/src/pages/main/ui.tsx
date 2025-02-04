import React from "react";

import { PageLayout } from "shared/ui/page-layout";
import { MainLayout } from "./main-layout";

export const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <MainLayout />
    </PageLayout>
  );
};
