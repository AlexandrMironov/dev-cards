import { useNotification } from "shared/ui/notification-provider";

export const useNotificationQuery = () => {
  const { showNotification } = useNotification();

  const handleSuccess = (messageKey: string) => {
    showNotification(messageKey, "success");
  };

  const handleError = (messageKey: string) => {
    showNotification(messageKey, "error");
  };

  return { handleSuccess, handleError };
};
