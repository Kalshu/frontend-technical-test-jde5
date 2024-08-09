import React from "react";
import { Flex, StackDivider, VStack } from "@chakra-ui/react";
import { Loader } from "../loader";
import { MemeComponent } from "./meme/Meme";
import { Meme } from "../../client";
import { useMemeListAPI } from "../../hookApi/useMemeListAPI";

export const MemeFeedPage: React.FC = () => {
  const { isLoading, memeList } = useMemeListAPI();

  if (isLoading) {
    return <Loader data-testid="meme-feed-loader" />;
  }
  return (
    <Flex width="full" height="full" justifyContent="center" overflowY="auto">
      <VStack
        p={4}
        width="full"
        maxWidth={800}
        divider={<StackDivider border="gray.200" />}
      >
        {memeList?.results
          ? memeList?.results.map((meme: Meme) => <MemeComponent meme={meme} />)
          : "No memes found"}
      </VStack>
    </Flex>
  );
};
