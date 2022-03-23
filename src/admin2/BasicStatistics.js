import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode,useEffect,useState } from 'react';
import {FaUserMd, FaHospital, FaUserAlt} from 'react-icons/fa'
import ApiCaller from '../utils/apiCaller';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, link } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px #2B6CB0 solid'}
      borderColor={'blue.600'}
      rounded={'lg'}
      as={'a'}
      href={link}
      style={{ textDecoration: 'none' }}
      >
      <Flex justifyContent={'space-between'} color='blue.500'>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}


export default function BasicStatistics() {
  const [doctor, setDoctor] = useState('');
useEffect(() => {
  ApiCaller('doctor-count', 'GET')
      .then(async res => {

        setDoctor(res.data.data)
      })
}, [])
const [user, setUser] = useState('');
useEffect(() => {
  ApiCaller('user-count', 'GET')
      .then(async res => {

        setUser(res.data.data)
      })
}, [])
  return (
    <>
    
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        color={'#364053'}
        >
        Our Doctorcare is expanding, you could be too!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Users'}
          stat={user}
          icon={<FaUserAlt size={'3em'} />}
          link={'/admin/user'}
          />
        <StatsCard
          title={'Doctor'}
          stat={doctor}
          icon={<FaUserMd size={'3em'} />}
          link={'/admin/doctor'}
        />
        <StatsCard
          title={'Clinic'}
          stat={'3'}
          icon={<FaHospital size={'3em'} />}
          link={'/admin/clinic'}
          />
      </SimpleGrid>
    </Box>
  </>
  );
}