import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useGetUserByIdAPI } from "../hookApi/useGetUserById";

type PersonaProps = {
  userId: string;
  dataTestId?: string;
};

export const Persona: React.FC<PersonaProps> = (props) => {
  const { userId } = props;

  const { user } = useGetUserByIdAPI(userId);

  return (
    <Flex>
      <Avatar
        borderWidth="1px"
        borderColor="gray.300"
        size="xs"
        name={user?.username ? user?.username : undefined}
        src={user?.pictureUrl ? user?.pictureUrl : undefined}
      />
      <Text ml={2} data-testid={`dataTestId`}>
        {user?.username ? user?.username : "Unknown user"}
      </Text>
    </Flex>
  );
};
