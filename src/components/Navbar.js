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
import logo from '../assets/image/logo-doctor-care.png'
import '../style/Navbar.css'

export default function Navbar() {
  
  const { isOpen, onToggle } = useDisclosure();
  const HandleLogout = () => {
    delete localStorage.token;
    window.location.href = '/home';
  }
  console.log(localStorage.token)
  const loggedInUser = localStorage.getItem('token');


  window.onscroll = function() {};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     console.log(document.body.scrollTop);
//     document.getElementById("navbar").style.paddingTop = "0px ";
    
//   } else {
//     document.getElementById("navbar").style.paddingTop = "0px";
   
//   }

  
// }
  return (
    <Box   id='navbar'>
      
      <Flex
       
        fontSize={'20px'}
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
          href='/home'
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
              {/* <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'/pro5'}>
                ProFile
              </Button>

              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                onClick={HandleLogout}
                _hover={{
                  bg: 'blue.300',
                }}>
                Log Out
              </Button> */}
                <Flex >
                
          <Menu>
            <MenuButton 
           
             mr={'20px'}
              py={1}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
               
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  width={'50px'}
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Tên</Text>
                  <Text fontSize="xs" color="gray.600">
                    Customer
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
              borderColor={'gray.700'}>
              <MenuItem as='a'  href={'/profile'}>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider/>
              <MenuItem  onClick={HandleLogout}>Sign out</MenuItem>
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
                href={'/signin'}>
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
                href={'/signup'}
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
  const linkColor = useColorModeValue('#1872a4', 'gray.200');
  const linkHoverColor = useColorModeValue('#15bbe0', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

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

                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
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
            {label}
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
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
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
        label: 'Cardiologist',
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
      {
        label: 'Address',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Phone',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Reference',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Fanpage',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
];