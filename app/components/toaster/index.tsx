"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: "#1effff",
            color: "#444",
          },
          iconTheme: {
            primary: "#444",
            secondary: "#1effff",
          },
        },
        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
        duration: 4000,
      }}
    />
  );
};
