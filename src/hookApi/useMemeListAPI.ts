import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiMemeGetList } from "../client";

const QUERY_KEY = (page: number) => ["memeLis", page];

export function useMemeListAPI(page = 1) {
  const fetchMemeList = useCallback(async () => {
    return apiMemeGetList({
      query: { page },
    });
  }, [page]);

  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEY(page),
    queryFn: fetchMemeList,
  });

  return {
    memeList: data?.data,
    isLoading,
    error: error || data?.error,
  };
}
