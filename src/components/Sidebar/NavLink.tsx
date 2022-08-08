import { ElementType } from "react";
import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string;
}

export function NavLink(props: Props) {
  const { icon, children, href, ...rest} = props

  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontSize="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}