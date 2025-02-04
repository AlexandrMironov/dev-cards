declare global {
  interface TelegramWebApp {
    initDataUnsafe: any;
    share: (params: { text?: string; url?: string }) => void;
    showPopup: (params: {
      type: string;
      message?: string;
      link?: string;
    }) => void;
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}
export {};
