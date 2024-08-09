import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getApiUsersByUserId } from "../client";

const QUERY_KEY = (userId: string) => ["user", userId];

export function useGetUserByIdAPI(userId: string) {
  const fetchUserById = useCallback(async () => {
    return getApiUsersByUserId({
      path: { userId },
    });
  }, [userId]);

  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEY(userId),
    queryFn: fetchUserById,
  });

  return {
    user: data?.data,
    isLoading,
    error: error || data?.error,
  };
}
