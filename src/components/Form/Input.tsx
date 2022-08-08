import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction,  } from "react"

interface Props extends InputProps {
  name: string
  label?: string
  error: any
}

const Component: ForwardRefRenderFunction<HTMLInputElement, Props> = 
  (props, ref) => { 
  const { name, label, error, ...rest } = props
  
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>Senha</FormLabel>} 
      <ChakraInput 
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...rest}
        ref={ref}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(Component)