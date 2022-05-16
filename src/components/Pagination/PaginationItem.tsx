import { Button } from "@chakra-ui/react";

interface Props {
  number: number
  isCurrent?: boolean
}

export function PaginationItem (props: Props) {
  const { isCurrent = false, number } = props
  
  if(isCurrent) {
    <Button 
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bgColor: 'pínk.500',
        cursor: 'default'
      }}
    >
      {number}
    </Button>
  }

  return (
    <Button 
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}