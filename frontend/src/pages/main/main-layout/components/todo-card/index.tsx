import { DeleteCardButton } from "./components/delete-card-button";
import { Box, Typography } from "@mui/material";

interface IToDoCardProps {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export const ToDoCard = ({
  id,
  name,
  description,
  createdAt,
}: IToDoCardProps) => {
  console.info(id, 1235);
  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "12px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, .05)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginRight: "20px",
        marginTop: "24px",
        padding: "32px 32px 20px 32px",
        width: "357px",
      }}
    >
      <Box>
        <Typography>{name}</Typography>
      </Box>
      <Box>
        <Typography>{description}</Typography>
      </Box>
      <Box
        sx={{
          alignItems: "end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>{createdAt}</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
          }}
        >
          <DeleteCardButton todoId={id} />
        </Box>
      </Box>
    </Box>
  );
};
