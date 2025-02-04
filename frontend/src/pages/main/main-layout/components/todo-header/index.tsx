import { Box } from "@mui/material";
import { AddToDoCardButton } from "./components/add-todo-card-button";

export const ToDoHeader = () => {
  return (
    <Box mb={3}>
      <AddToDoCardButton />
    </Box>
  );
};
