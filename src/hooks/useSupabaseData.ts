"use client";

import { useState, useEffect } from "react";
import supabase from "../lib/supabase";

interface FetchResult<T> {
  data: T[] | null;
  loading: boolean;
  error: string | null;
}

const useSupabaseData = <T>(tableName: string) => {
  const [result, setResult] = useState<FetchResult<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from<T>(tableName).select("*");

        if (error) {
          throw error;
        }

        setResult({ data, loading: false, error: null });
      } catch (error: any) {
        setResult({ data: null, loading: false, error: error.message });
        console.error(error);
      }
    };

    fetchData();
  }, [tableName]);

  const insertData = async (newData: Partial<T>) => {
    try {
      const { data, error } = await supabase
      .from<T>(tableName)
      .insert([newData]).
      select();
      if (error) {
        throw error;
      }
      setResult({ data, loading: false, error: null });
    } catch (error: any) {
      setResult({ data: null, loading: false, error: error.message });
      console.error(error);
    }
  };

  return { ...result, insertData };
};

export default useSupabaseData;
