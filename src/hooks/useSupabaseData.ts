"use client";

import { useState, useEffect } from "react";
import supabase from "../lib/supabase";

interface FetchResult {
  data: any[] | null;
  loading: boolean;
  error: string | null;
}

const useSupabaseData = <T>(tableName: string) => {
  const [result, setResult] = useState<FetchResult>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from(tableName).select("*");

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
      .from(tableName)
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
