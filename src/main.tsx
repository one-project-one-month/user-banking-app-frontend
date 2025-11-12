import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/routes/router";
import { Toaster } from "./components/ui/sonner";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
