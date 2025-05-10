'use client'

import { createContext, useEffect, useState } from "react";

// ایجاد یک Context
export const DataContext = createContext();

export function DataProvider({ children, initialData = null }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(initialData ? false : true);

  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:4000/Nobito");
          const result = await res.json();
          setData(result);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [initialData]);

  return (
    <DataContext.Provider value={{ data, loading, setData }}>
      {children}
    </DataContext.Provider>
  );
}