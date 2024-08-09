import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiCommentGetList } from "../client";

const QUERY_KEY = (memeId: string, page: number) => ["comment", memeId, page];

export function useCommentListAPI(memeId: string, page = 1) {
  const fetchCommentList = useCallback(async () => {
    return apiCommentGetList({
      path: { memeId },
      query: { page },
    });
  }, [memeId, page]);

  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEY(memeId, page),
    queryFn: fetchCommentList,
  });

  return {
    comments: data?.data,
    isLoading,
    error: error || data?.error,
  };
}
