import { memo, useMemo } from "react";
import { ToDoHeader } from "./components/todo-header";
import { ToDoCard } from "./components/todo-card";
import { RequestWrapper } from "./components/request-wrapper";
import { Box } from "@mui/material";
import { useCards } from "../api";

export const MainLayout = memo(() => {
  const { data: response, isLoading, isError } = useCards();

  const todos = useMemo(() => {
    return (
      response &&
      response.length > 0 &&
      response.map((item, index) => {
        return (
          <ToDoCard
            key={index}
            name={item.title}
            description={item.description}
            createdAt={item.startDate}
            id={item._id}
          />
        );
      })
    );
  }, [response]);

  return (
    <Box
      sx={{
        borderRadius: "24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        minHeight: "80vh",
        padding: "32px",
      }}
    >
      <ToDoHeader />
      <RequestWrapper
        dataLength={response?.length}
        isError={isError}
        isLoading={isLoading}
      >
        <>{todos}</>
      </RequestWrapper>
    </Box>
  );
});
