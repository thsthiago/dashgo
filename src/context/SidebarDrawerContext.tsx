import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { createContext, PropsWithChildren, useContext, useEffect } from "react"

const SidebarDrawerContext = createContext<UseDisclosureProps>({})

export const SidebarDrawerProvider = ({ children }: PropsWithChildren) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)