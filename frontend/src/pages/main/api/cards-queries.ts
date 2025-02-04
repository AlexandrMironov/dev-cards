// apps/dapp/src/entities/user/model/user-queries.ts
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchCards, deleteCard, createCard } from "./cards-requests";

import { CardType } from "./types";

export const useCards = (limit = 10, skip = 0) => {
  return useQuery<CardType[], Error>(["cards", limit, skip], () =>
    fetchCards(limit, skip)
  );
};

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  return useMutation<CardType, Error, { id: string }>(
    ({ id }) => deleteCard(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cards"]);
      },
    }
  );
};

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  const currentDate = new Date();
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const newCard = {
    title: `title ${currentDate.toLocaleDateString(
      "en-US"
    )} ${minutes}:${seconds}`,
    description: `descr ${currentDate.toLocaleDateString(
      "en-US"
    )} ${minutes}:${seconds}`,
    startDate: String(currentDate.getTime()),
  };
  return useMutation<CardType, Error>(() => createCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cards"]);
    },
  });
};
