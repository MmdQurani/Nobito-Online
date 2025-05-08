// app/ClientProvider.js
"use client";
import { DataProvider } from "./Context";

export default function ClientProvider({ initialData, children }) {
  return <AppProvider initialData={initialData}>{children}</AppProvider>;
}
