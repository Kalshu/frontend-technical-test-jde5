import React from "react";
import { Meme } from "../../../client";
import { VStack, Flex, Text } from "@chakra-ui/react";
import { format } from "timeago.js";
import { MemePicture } from "../../meme-picture";
import { MemeDescription } from "./MemeDescription";
import { Persona } from "../../Persona";
import { MemeCommentList } from "./MemeCommentList";

type MemeComponentProps = {
  meme: Meme;
};
export const MemeComponent: React.FC<MemeComponentProps> = (props) => {
  const meme = props.meme;

  return (
    <VStack key={meme.id} p={4} width="full" align="stretch">
      <Flex justifyContent="space-between" alignItems="center">
        <Persona userId={meme.authorId} dataTestId={`meme-author-${meme.id}`} />
        <Text fontStyle="italic" color="gray.500" fontSize="small">
          {format(meme.createdAt)}
        </Text>
      </Flex>
      <MemePicture
        pictureUrl={meme.pictureUrl}
        texts={meme.texts ?? []}
        dataTestId={`meme-picture-${meme.id}`}
      />
      <MemeDescription memeId={meme.id} description={meme.description ?? ""} />
      <MemeCommentList memeId={meme.id} />
    </VStack>
  );
};
