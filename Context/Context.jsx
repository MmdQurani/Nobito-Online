'use client'

import { createContext, useEffect, useState } from "react";

// ایجاد یک Context
export const DataContext = createContext();

export const fetching_The_API = async () => {
  const getData = await fetch('http://localhost:4000/doctors');
  const data = await getData.json();
  return data
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetching_The_API = async () => {
      const getData = await fetch('http://localhost:4000/doctors');
      const data = await getData.json();
      setData(data);
    }
    fetching_The_API();
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}