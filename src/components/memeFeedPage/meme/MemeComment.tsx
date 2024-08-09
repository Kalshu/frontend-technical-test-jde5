import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { format } from "timeago.js";
import { useGetUserByIdAPI } from "../../../hookApi/useGetUserById";
import { Comment } from "../../../client";

type MemeCommentsProps = {
  comment: Comment;
  memeId: string;
};

export const MemeComment: React.FC<MemeCommentsProps> = (props) => {
  const { comment, memeId } = props;

  const { user: author } = useGetUserByIdAPI(comment.authorId);

  return (
    <Flex key={comment.id}>
      <Avatar
        borderWidth="1px"
        borderColor="gray.300"
        size="sm"
        name={author?.username ? author.username : undefined}
        src={author?.pictureUrl ? author.pictureUrl : undefined}
        mr={2}
      />
      <Box p={2} borderRadius={8} bg="gray.50" flexGrow={1}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>
            <Text data-testid={`meme-comment-author-${memeId}-${comment.id}`}>
              {author?.username ? author.username : "Unknown user"}
            </Text>
          </Flex>
          <Text fontStyle="italic" color="gray.500" fontSize="small">
            {format(comment.createdAt)}
          </Text>
        </Flex>
        <Text
          color="gray.500"
          whiteSpace="pre-line"
          data-testid={`meme-comment-content-${memeId}-${comment.id}`}
        >
          {comment.content}
        </Text>
      </Box>
    </Flex>
  );
};
