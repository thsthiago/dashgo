import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Cabral</Text>
        <Text color="gray.300" fontSize="small">
          thiagocabral477@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Thiago Cabral" src="https://github.com/thsthiago.png" />
    </Flex>
  )
}