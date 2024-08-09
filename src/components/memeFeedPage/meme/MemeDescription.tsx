import { Box, Text } from "@chakra-ui/react";
import React from "react";

type MemeDescription = {
  memeId: string;
  description: string;
};

export const MemeDescription: React.FC<MemeDescription> = (props) => {
  const { description, memeId } = props;
  return (
    <Box>
      <Text fontWeight="bold" fontSize="medium" mb={2}>
        Description:{" "}
      </Text>
      <Box p={2} borderRadius={8} border="1px solid" borderColor="gray.100">
        <Text
          color="gray.500"
          whiteSpace="pre-line"
          data-testid={`meme-description-${memeId}`}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
