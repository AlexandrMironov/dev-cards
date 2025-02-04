import { useCallback } from "react";
import { Button } from "@mui/material";
import { useDeleteCard } from "pages/main/api";

interface IDeleteCardButtonProps {
  todoId: string;
}

export const DeleteCardButton = ({ todoId }: IDeleteCardButtonProps) => {
  const { mutate: deleteItem, isLoading } = useDeleteCard();

  const onDeleteButtonClick = useCallback(() => {
    deleteItem({ id: todoId });
  }, [deleteItem, todoId]);

  return (
    <Button
      variant="contained"
      disabled={isLoading}
      onClick={onDeleteButtonClick}
    >
      delete
    </Button>
  );
};
