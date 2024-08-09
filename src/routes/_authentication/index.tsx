import { createFileRoute } from "@tanstack/react-router";
import { MemeFeedPage } from "../../components/memeFeedPage/MemeFeedPage";

export const Route = createFileRoute("/_authentication/")({
  component: MemeFeedPage,
});
