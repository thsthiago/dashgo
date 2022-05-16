import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import { Sidebar, Header } from "components";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-05-20T00:00.000Z',
      '2022-05-21T00:00.000Z',
      '2022-05-22T00:00.000Z',
      '2022-05-23T00:00.000Z',
      '2022-05-24T00:00.000Z',
      '2022-05-25T00:00.000Z',
      '2022-05-26T00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    colors: [theme.colors.pink[500]],
    gradient: {
      shade: 'dark',
      gradientToColors: [theme.colors.pink[500]],
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  },
  colors: [theme.colors.pink[500]]
}

const series = [
  { name: 'series1', data: [31, 120, 18, 10, 70, 150, 200]}
]

export default function Dashboard () {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"       
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart 
              options={options} 
              series={series} 
              type="area" 
              height={160} 
            />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"        
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart 
              options={options} 
              series={series} 
              type="area" 
              height={160} 
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}