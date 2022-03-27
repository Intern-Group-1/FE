import React from "react";
import {
    Box,
    Image,
    Text
} from "@chakra-ui/react"
import Imgabout from "../../assets/image/abc.jpg"
import Logo from "../../assets/image/logo-doctor-care.png"
import about from "../../assets/image/about2.png"
import goal from "../../assets/image/goal.png"
import {CheckIcon} from "@chakra-ui/icons"
import Card1 from "../Footer/Card"
import Nav from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function About(){
    const members =[{
        name:'Levi',
        major:'Frontend Developer',
        bg:'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/145723555_2575910952707675_8534528533771887648_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=He4h31Wy6hcAX_5snES&_nc_oc=AQn3aTGt8_3SA7sVVVPRSQbXyEmwIeH39Zn2Th9Fmb5SrBFhwCEj36-FeeH-sp1nn10&_nc_ht=scontent.fdad1-1.fna&oh=00_AT8-Jp_H6TJ0llsBnsL-js-8D_J0Kvb7913eCvm70WTrVA&oe=62608DD8',
        avt:'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/248896352_2752573438374758_683158616322124444_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=AhlmI88Nr8cAX-zmxKb&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-F_IfVWYCgO7s9KuLtR0v1BSSjR2tgNh59Zar3s7EsBQ&oe=623FB116',
        email:'Ngocnamzxc@gmail.com',
        phone:'0768511056',
        fb:'https://www.facebook.com/ngocnamzxc/'
    },{
        name:'Otis',
        major:'Frontend Developer',

        bg:'https://cdn.sixthandi.org/wp/wp-content/uploads/2020/05/Belief.jpg',
        avt:'https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/40213639_452858051865032_2031456261844762624_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=8oi6JUETdVoAX_dLYxh&_nc_ht=scontent.fdad1-3.fna&oh=00_AT9JkwLqXBR3sM506vWbsGtuxrQfW3Q7oYIhVUhY1eMQ7Q&oe=625AD56F',

        email:'dung05042000@gmail.com',
        phone:'0375082670',
        fb:'https://www.facebook.com/Dung2ker'
    },{
        name:'Ryder',
        major:'Backend Developer',
        bg:'https://1.bp.blogspot.com/-WXSfLvO2X5g/XVeQbdlaaEI/AAAAAAAACmk/P0OkefPnFOIEk0t1OABib6xKPCL1G6MFwCLcBGAs/s1600/gong-ty-5AEFIuud6XI-unsplash.jpg',
        avt:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/154264038_1063057400856289_4444760213455757403_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=N1NPT0aJOPkAX9OyNeA&_nc_ht=scontent.fdad2-1.fna&oh=00_AT_Ay3g9d_eCPQKWMwNU6VnxwWe7UKcdXfBeZO_MiJTIVQ&oe=625936C2',
        email:'tdnphuck42@gmail.com',
        phone:'0836323309',
        fb:'https://www.facebook.com/PhucTDN'
    },{
        name:'Jamison',
        major:'Backend Developer',
        bg:'https://addons-media.operacdn.com/media/CACHE/images/themes/05/144705/1.0-rev1/images/0993404e-79e0-4052-923d-89236e7c102f/ce42ef837a89c852c000eafd63cd0763.jpg',
        avt:'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/69987742_2441234426164423_2187870496794607616_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=RfjUq3SzmoIAX85eN1f&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8996HebwzrL4qzJfMXTPmWj25BXzMqjrB1bz5CRE73CQ&oe=6259B801',
        email:'quocphan@gmail.com',
        phone:'0966119701',
        fb:'https://www.facebook.com/quocphan219'
    }]
    return(
        <>
        <Nav/>
            <Box
            h={'1900px'}
            >
                <Box
                position={'relative'}
                >
                    <Image 
                    src={Imgabout}
                    w={'100%'}
                    />
                    <Text
                    position={'absolute'}
                    color={'white'}
                    left={'650'}
                    top={'200px'}
                    fontWeight={'bold'}
                    fontSize={'55px'}
                    >About us</Text>
                </Box>
                <Box
                h={'450px'}
                position={'relative'}
                >
                    <Image
                    src={about}
                    maxW={'300px'}
                    position={'absolute'}
                    top={'90px'}
                    left={'380px'}
                    />
                    <Box
                    position={'absolute'}
                    top={'110px'}
                    left={'800px'}
                    color={'#404d60'}
                    >
                        <Text
                        fontWeight={'bold'}
                        fontSize={'25px'}
                        >
                            Doctorcare! Take care of everyone's health.
                        </Text>
                        <Text 
                        w={'350px'}
                        mt={'20px'}
                        fontSize={'20px'}
                        >
                        Provide healthcare solutions. Choose the right specialist. 
                        Quick and accurate examination. Dedicated and attentive customer care.
                        </Text>
                    </Box>
                </Box>
                <Box
                bg={'#f8f9fd'}
                h={'400px'}
                >
                    <Box
                    position={'relative'}
                    >
                        <Image
                        src={goal}
                        maxW={'300px'}
                        position={'absolute'}
                        top={'90px'}
                        left={'800px'}
                        />
                        <Box
                            position={'absolute'}
                            top={'80px'}
                            left={'400px'}
                            color={'#404d60'}
                            >
                                <Text
                                fontWeight={'bold'}
                                fontSize={'25px'}
                                >
                                    Our goal!
                                </Text>
                                <Text 
                                w={'300px'}
                                mt={'20px'}
                                fontSize={'20px'}
                                >
                                <CheckIcon
                                color={'green.400'}
                                mr={'10px'}
                                />
                                    Smooth to use, compatible with all devices.
                                </Text>
                                <Text 
                                w={'350px'}
                                mt={'10px'}
                                fontSize={'20px'}
                                >
                                <CheckIcon
                                color={'green.400'}
                                mr={'10px'}
                                />
                                    Exceptional features.
                                </Text>
                                <Text 
                                w={'350px'}
                                mt={'10px'}
                                fontSize={'20px'}
                                >
                                <CheckIcon
                                color={'green.400'}
                                mr={'10px'}
                                />
                                    Easy to use.
                                </Text>
                                <Text 
                                w={'350px'}
                                mt={'10px'}
                                fontSize={'20px'}
                                >
                                <CheckIcon
                                color={'green.400'}
                                mr={'10px'}
                                />
                                    High security.
                                </Text>
                        </Box>
                    </Box>
                </Box>

                <Box
                h={'400px'}
                >
                    <Text
                    textAlign={'center'}
                    fontSize={'35px'}
                    fontWeight={'bold'}
                    mt={'20px'}
                    >Our Member</Text>
                    <Box
                    d={'flex'}
                    justifyContent={'center'}
                    >
                        {members.map(member => (
                            <Card1 
                            ml={'30px'}
                            w={'500px'}
                            key={member.name} name={member.name} major={member.major} avt={member.avt} bg={member.bg} phone={member.phone} email={member.email} fb={member.fb} />
                        ))}
                        
                    </Box>
                </Box>
            </Box>
        <Footer/>
        </>
    )
}