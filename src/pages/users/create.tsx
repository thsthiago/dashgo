import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header, Input, Sidebar } from "components";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          
          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome complete" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" label="Senha" type="password"/>
              <Input name="password_confirmation" label="Confirmação da senha" type="password" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" gap="4" justify="flex-end">
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button colorScheme="pink">Salvar</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}