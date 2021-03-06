import { FormControl, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react"

interface Props extends InputProps {
  name: string
  label?: string
}

export function Input(props: Props) { 
  const { name, label, ...rest } = props
  
  return (
    <FormControl>
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
      />
    </FormControl>
  )
}