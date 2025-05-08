// app/ClientProvider.js
"use client";
import { DataProvider } from "./Context";

export default function ClientProvider({ initialData, children }) {
  return <DataProvider initialData={initialData}>{children}</DataProvider>;
}
