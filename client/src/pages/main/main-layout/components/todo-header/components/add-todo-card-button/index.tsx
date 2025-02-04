import { useCallback } from "react";
import { Button } from "@mui/material";
import { useCreateCard } from "pages/main/api";

export const AddToDoCardButton = () => {
  const { mutate: createItem } = useCreateCard();

  const onCreateTaskButtonClick = useCallback(() => {
    createItem();
  }, [createItem]);

  return (
    <>
      <Button variant="contained" onClick={onCreateTaskButtonClick}>
        create
      </Button>
    </>
  );
};
