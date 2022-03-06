import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {
  FiChevronDown,
} from 'react-icons/fi';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import logo from '../assets/image/logo-doctor-care.png'
import { handleGetUserId } from '../services/User';
import '../responsive/homepage/Navbar.css'
import '../style/Navbar.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate()

  const { isOpen, onToggle } = useDisclosure();
  const HandleLogout = () => {
    delete localStorage.token
    delete localStorage.user
    delete localStorage.Id_User
    delete localStorage.role;
    navigate('/home');
  }
  const HandleProfile = () => {
    navigate('/profile');
  }
  const handleSignup = () => {
    navigate('/signup');
  }
  const HandleSignin = () => {
    navigate('/signin');
  }
  const HandleHome = () =>{
    navigate('/home')
  }
  const loggedInUser = localStorage.getItem('token');

<<<<<<< HEAD
  const  loggedInUser =  localStorage.getItem('token');
  console.log('token la'+loggedInUser);
  const InUser = Session.get('user');
  console.log('id local');
  console.log(InUser);
  window.onscroll = function () { };

=======
>>>>>>> 0ce8ad1f4e1ba8b089cc02e738a4f8c924762261

  window.onscroll = function () { };

// Setting user
const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
  //  const [gender, setGender] = useState('')
  //  const [address, setAddress] = useState('')
  //  const [phone, setPhone] = useState('')
async function byID (){ 
        const data= await handleGetUserId()
        console.log('Data cua ta:'+data)
        if(data)
        {
            setName(data.data.data[0].full_name)
            setAvt(data.data.data[0].avatar)
            // setAddress(data.data.data[0].address)
            // setPhone(data.data.data[0].phone_number)
            // setGender(data.data.data[0].gender)
        }
}
  const [Api, setApi] = useState([])
  useEffect(async () => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res)
        setApi(res.data.data)
      })
      if(loggedInUser){
        await byID()
      }
      
  }, [])
  const role= localStorage.getItem('role')
  return (
    <Box id='navbar'>
      <Flex

        fontSize={'15px'}
        fontWeight={'bold'}
        boxShadow='xl' p='1' rounded='md' bg='white'
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'20px'}
        //py={{ base: 2 }}
        // px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>

        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box
            as='a'
            onClick={HandleHome}
            w='100px'
          >
            <Image ml='50px'
              mt='5px'
              // boxSize='50px'
              alt={'Login Image'}
              objectFit={'cover'}
              src={logo}


            />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {loggedInUser ?
            <>
              <Flex >

                <Menu>
                  <MenuButton

                    mr={'20px'}
                    py={1}
                    transition="all 0.3s"
                    _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar
                        // className='img-nav'
                        size={'sm'}
                        src={
                          avatar
                        }
                      />
                      <VStack
                        minW={'120px'}
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">{full_name}</Text>
                        <Text fontSize="xs" color="gray.600">
                          {role}
                        </Text>

                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    border={'0.5px'}
                    bg={'white'}
                  // borderColor={'gray.700'}
                  >
                    <MenuItem as='a' color={'black'} fontWeight='normal' onClick={HandleProfile}>Profile</MenuItem>
                    <MenuItem as='a' color={'black'} fontWeight='normal' href={'/#'} >Settings</MenuItem>
                    <MenuItem as='a' color={'black'} fontWeight='normal' href={'/#'}>Billing</MenuItem>
                    <MenuDivider />
                    <MenuItem color={'blue.500'} _hover={{
                      backgroundColor: 'blue.100'
                    }} onClick={HandleLogout}>Sign out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
            :
            <>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                onClick={HandleSignin}>
                Sign in
              </Button>
              <Button
                //h='30px'
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                onClick={handleSignup}
                _hover={{
                  bg: 'blue.300',
                }}>
                Sign up
              </Button>

            </>
          }
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const about = [{

    label: 'Address',
    href: '#'
  }, {
    label: 'Phone',
    href: '#'
  }, {
    label: 'Reference',
    href: '#'
  }, {
    label: 'Fanpage',
    href: '#'
  }]
  const linkColor = useColorModeValue('#1872a4', 'gray.200');
  const linkHoverColor = useColorModeValue('#15bbe0', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const [Api, setApi] = useState([]);

  useEffect(() => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res);
        setApi(res.data.data)
      })
  }, [])
  return (
    <Stack pl='100px' direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
              <Link

                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lm'}
                fontWeight={500}
                color={linkColor}




                _hover={{
                  textDecoration: 'none',

                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent

                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                maxW={'fit-content'}>

                <Stack>

                  {Api.map(child => (
                  <DesktopSubNav key={child._id} name={child.name} />
                   
                  ))}

                </Stack>
               
              </PopoverContent>

            )}
          </Popover>


        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = (props) => {

  return (
    <Link
      // href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.100', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.500' }}
            fontWeight={500}>
            {props.name}
          </Text>
          {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>

      </Stack>

    </Link>
  );
};

const MobileNav = () => {
  const [Api, setApi] = useState([]);

  useEffect(() => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res);
        setApi(res.data.data)
      })
  }, [])
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    // id='navbar'
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const [Api, setApi] = useState([]);

  useEffect(() => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res);
        setApi(res.data.data)
      })
  }, [])
  return (
    <Stack spacing={4} onClick={children && onToggle} >
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {
            Api.map((child) => (
              <Link key={child._id} py={2} >
                {child.name}
              </Link>
            ))}
        </Stack>

      </Collapse>

    </Stack>

  );
};
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}


const NAV_ITEMS: Array<NavItem> = [

  {
    label: 'Home',
      href: '/home',

  },
  {
    label: 'Speciality',
    children: [
      {
        label: '{a}',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Neurology',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Obstetrics',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Doctor',
    href: '#',
  },
  {
    label: 'About',
    children: [
      // {
      //   label: 'Address',
      //   subLabel: 'Find your dream design job',
      //   href: '#',
      // },
      // {
      //   label: 'Phone1',
      //   subLabel: 'An exclusive list for contract work',
      //   href: '#',
      // },
      // {
      //   label: 'Reference',
      //   subLabel: 'An exclusive list for contract work',
      //   href: '#',
      // },
      // {
      //   label: 'Fanpage',
      //   subLabel: 'An exclusive list for contract work',
      //   href: '#',
      // },
    ],
  },
];