import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {EmailIcon, PhoneIcon} from "@chakra-ui/icons"
  
  
  export default function Card1(props) {
    return (
      <Center py={6}
      w={'320px'}
      >
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              props.bg
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                props.avt
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {props.name}
              </Heading>
              <Text color={'gray.500'}>{props.major}</Text>
            </Stack>
  
            <Stack direction={'column'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'left'}>
                <Text fontSize={'12px'} color={'gray.500'}   >
                  <EmailIcon ml={'24px'} /> {props.email}
                </Text>
              </Stack>
              <Stack spacing={0} align={'left'}>
                <Text fontSize={'12px'} color={'gray.500'}>
                 <PhoneIcon ml={'25px'} /> {props.phone}
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              as={'a'}
              href={props.fb}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                textDecoration: 'none',
                color: 'white',
              }}>
              Contact us
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }