import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type SignInFormData = {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    try { 
      await new Promise(res => setTimeout(res, 400))
    } catch {

    }
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      > 
        <Stack spacing="4">
          <Input 
            type="email" 
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input 
            type="password" 
            label="Senha"  
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
