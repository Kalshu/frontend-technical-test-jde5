import {
  LinkBox,
  Box,
  Flex,
  LinkOverlay,
  Icon,
  Collapse,
  Avatar,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CaretDown, CaretUp, Chat } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useAuthToken, useAuthUser } from "../../../contexts/authentication";
import { useMutation } from "@tanstack/react-query";
import { createMemeComment } from "../../../api";
import { useGetUserByIdAPI } from "../../../hookApi/useGetUserById";
import { useCommentListAPI } from "../../../hookApi/useCommentListAPI";
import { MemeComment } from "./MemeComment";

type MemeCommentsProps = {
  memeId: string;
};

export const MemeCommentList: React.FC<MemeCommentsProps> = (props) => {
  const { memeId } = props;
  const token = useAuthToken();
  const userId = useAuthUser();
  const { user } = useGetUserByIdAPI(userId);
  const { comments } = useCommentListAPI(memeId);

  const [openedCommentSection, setOpenedCommentSection] = useState<
    string | null
  >(null);
  const [commentContent, setCommentContent] = useState<{
    [key: string]: string;
  }>({});
  const { mutate } = useMutation({
    mutationFn: async (data: { memeId: string; content: string }) => {
      await createMemeComment(token, data.memeId, data.content);
    },
  });

  return (
    <>
      <LinkBox as={Box} py={2} borderBottom="1px solid black">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <LinkOverlay
              data-testid={`meme-comments-section-${memeId}`}
              cursor="pointer"
              onClick={() =>
                setOpenedCommentSection(
                  openedCommentSection === memeId ? null : memeId
                )
              }
            >
              {comments?.total && (
                <Text data-testid={`meme-comments-count-${memeId}`}>
                  {comments.total} comments
                </Text>
              )}
            </LinkOverlay>
            <Icon
              as={openedCommentSection !== memeId ? CaretDown : CaretUp}
              ml={2}
              mt={1}
            />
          </Flex>
          <Icon as={Chat} />
        </Flex>
      </LinkBox>
      <Collapse in={openedCommentSection === memeId} animateOpacity>
        <Box mb={6}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (commentContent[memeId]) {
                mutate({
                  memeId: memeId,
                  content: commentContent[memeId],
                });
              }
            }}
          >
            <Flex alignItems="center">
              <Avatar
                borderWidth="1px"
                borderColor="gray.300"
                name={user?.username ? user?.username : undefined}
                src={user?.pictureUrl ? user?.pictureUrl : undefined}
                size="sm"
                mr={2}
              />
              <Input
                placeholder="Type your comment here..."
                onChange={(event) => {
                  setCommentContent({
                    ...commentContent,
                    [memeId]: event.target.value,
                  });
                }}
                value={commentContent[memeId]}
              />
            </Flex>
          </form>
        </Box>
        <VStack align="stretch" spacing={4}>
          {comments &&
            comments.results?.map((comment) => (
              <MemeComment key={comment.id} comment={comment} memeId={memeId} />
            ))}
        </VStack>
      </Collapse>
    </>
  );
};
