import { ElementType } from "react";
import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";

interface Props extends LinkProps {
  icon: ElementType
  children: string
}

export function NavLink(props: Props) {
  const { icon, children, ...rest} = props

  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontSize="medium">{children}</Text>
    </Link>
  )
}