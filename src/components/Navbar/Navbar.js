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
import ApiCaller from '../../utils/apiCaller';
import logo from '../../assets/image/logo-doctor-care.png'
import { handleGetUserId } from '../../services/User';
import '../../responsive/homepage/Navbar.css'
import '../../style/Navbar.css'
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
  const HandleHome = () => {
    navigate('/home')
  }
  const loggedInUser = localStorage.getItem('token');
  console.log('token la' + loggedInUser);
  //const InUser = Session.get('user');
  console.log('id local');
  //console.log(InUser);
  window.onscroll = function () { };


  window.onscroll = function () { };

  // Setting user
  const [full_name, setName] = useState('')
  const [avatar, setAvt] = useState('')
  async function byID() {
    const data = await handleGetUserId()
    
    if (data) {
      setName(data.data.data[0].full_name)
      setAvt(data.data.data[0].avatar)
    }
  }
  const [Api, setApi] = useState([])
  useEffect(async () => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res)
        setApi(res.data.data)
      })
    

  }, [])
  if (loggedInUser) {
    byID()
  }
  const role = localStorage.getItem('role')
 
  return (
    <Box id='navbar'>
      <Flex

        fontSize={'15px'}
        fontWeight={'bold'}
        boxShadow='xl' p='1' rounded='md' bg='white'
        background={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        h={'62px'}
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

        <Flex flex={{ base: 1 }} ml='10px' justify={{ base: 'center', md: 'start' }}>
          <Box
            as='a'
            onClick={HandleHome}
            w='120px'
          >
            <Image ml='10px'
              mt='5px'
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
                {/* <Button>Appointment</Button> */}
                <Menu>
                  <MenuButton
                    height={'10px'}
                    mr={'13px'}
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
                        minW={'20px'}
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text id='name' className="crop" fontSize="sm" >{full_name}</Text>
                        {/* <Text fontSize="xs" color="gray.600">
                          {role}
                        </Text> */}

                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    border={'0.5px'}
                    bg={'white'}
                  >

                    <MenuItem as='a' color={'black'} style={{textDecoration:'none'}} fontWeight='normal' onClick={HandleProfile}>Profile</MenuItem>

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
                fontWeight={700}
                variant={'link'}
                onClick={HandleSignin}
                style={{textDecoration:'none'}}
                >
                Sign in
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                onClick={handleSignup}
                _hover={{
                  textDecoration: 'none',
                  bg: 'blue.300',
                }}
                style={{textDecoration:'none'}}
                >
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
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('#15bbe0', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const navigate = useNavigate()
  function link(label) {
   
      <>
  { 
      
          label == 'Doctors' ? navigate('/doctor') :          
          label=='Home' ?navigate('/home'):
          label=='About' ?navigate('/about'):
          {}
    }
      </>

    
  }
  const [spe, setSp] = useState([]);

  useEffect(() => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res);
        setSp(res.data.data)
      })
  }, [])
 
  
  return (
    <Stack   
    fontSize={'18px'}
    pl='60px' direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
              <Link
                onClick={(e)=>link(navItem.label)}
                p={2}
                //href={navItem.href}
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

                  {spe.map((child) => (
                    <DesktopSubNav key={child.name} 
                    href={'/Speciality/' + `${child.name}`}
                   
                      
                      label={child.name} />
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

const DesktopSubNav = ({ label,href}) => {
  const navigate = useNavigate()
  function getAllSpeciality(href){
    console.log(`/Speciality/${href}`);
      navigate(`${href}`)
      //navigate('/doctor')
     
    }
  return (
    <Link
      //onClick={link}
      // href={href}
      onClick={(e)=>getAllSpeciality(href)}   
      style={{ textDecoration: 'none' }}
      role={'group'}
      display={'block'}
      p={2}
      w={'215px'}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.100', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
         
            <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.500' }}
            fontWeight={500}>
            {label}
            
          </Text>
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
  
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
         <MobileNavItem key={navItem.label} 
         href={'/Speciality/' + `${navItem.label}`} 
         {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [spe, setSp] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
       
        setSp(res.data.data)
      })
  }, [])
  function link(label) {
   
    <>
{ 
    
        label == 'Doctors' ? navigate('/doctor') :          
        label=='Home' ?navigate('/home'):
        label=='About' ?navigate('/about'):
        {}
  }
    </>

  
}
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as='a'
        onClick={(e)=>link(label)}
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
            spe.map((child) => (
              <Link key={child.name} py={2} href={'/Speciality/' + `${child.name}`}>
                {child.name}
              </Link>
            ))}
        </Stack>

      </Collapse>

    </Stack>

  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: [NavItem];
//   href?: string;
// }

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/home',
  },
  {

    label: 'Specialitys',
    children: [
      
      {
        
        label: 'Urology',
        subLabel: 'Trending Design to inspire you',
        //href: '#',
      },
      {
        label: 'Neurology',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'Orthopedic',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'General Physician',
        subLabel: 'Trending Design to inspire you',
        //href: '#',
      },
      {
        label: 'Dentist',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'Consultant Physician',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'Cardiologist',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
    ],
  },
  {

    label: 'Doctors',
    href: '/doctor',
  },
  {

    label: 'About',
    href: '/about',
    // children: [
    //   {
    //     label: 'Address',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Phone',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    //   {
    //     label: 'Reference',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    //   {
    //     label: 'Fanpage',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  // {
  //   label: 'Appointment',
  //   href: '#',
  // },

];
