import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "components";

export default function Home() {
  return (
    <Flex 
      h="100vh" 
      w="100vw" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      > 
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
