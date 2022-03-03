import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
import BG from '../assets/image/news.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'

export default function News(){
    return(
        <>
        <Navbar />
        <Box 
        w={'80%'}
        ml={'10%'}
        mr={'10%'}
        mt={'5'}
        bg={'gray.200'}
        >
            <Text as={'h1'}
            fontWeight={'bold'}
            fontSize={'35'}
            pt={'15'}
            ml={'20'}
            >
            Phòng chống trầm cảm sau sinh - Đơn giản và hiệu quả
            </Text>
            <Text
            fontSize={'20'}
            mr={'56'}
            ml={'88'}
            mt={'10'}
            >
            Trầm cảm sau sinh là một vấn đề tương đối phổ biến, 
            ảnh hưởng từ 10% đến 15% phụ nữ sau khi sinh. 
            Biết cách phòng tránh bệnh từ sớm sẽ giúp cho sức khỏe của mẹ 
            và bé được ổn định và phát triển tốt hơn, tránh xảy ra những trường hợp 
            đáng tiếc.Trong nội dung dưới đây, 
            Bác sĩ Trần Thị Hồng Thu sẽ chia sẻ thêm các thông tin đến bạn đọc.
            </Text>
            <Image
            src={BG}
            mr={'auto'}
            ml={'auto'}
            mt={'20'}
            mb={'15'}
            />
            <Text>
            Cứ 7 bà mẹ sau sinh (thường là những bà mẹ mới sinh lần đầu) thì sẽ có 1 người mắc chứng trầm cảm sau sinh. Đây là một dạng trầm cảm, mà khi mắc phải, người mẹ sẽ trở nên yếu đuối về tinh thần, thể chất lẫn cảm xúc. 
Bệnh trầm cảm có thể xảy ra với tất cả phụ nữ trước sinh hoặc sau khi sinh, nhưng không phải ai cũng phát hiện hay ý thức được về bệnh.
Phòng bệnh hơn chữa bệnh - nhận biết và phòng ngừa bệnh trầm cảm sau sinh sớm sẽ là cách tốt nhất, tránh nguy cơ mắc bệnh cũng như những ảnh hưởng xấu của bệnh.
            </Text>
            <pre>
            Thời kỳ sau khi sinh:
                - Sau khi sinh, cách tốt nhất là đi gặp bác sĩ chuyên khoa Tâm thần và kiểm tra sớm các dấu hiệu, triệu chứng của trầm cảm sau sinh. Càng phát hiện sớm, việc điều trị sẽ càng trở nên dễ dàng hơn.
                - Phụ nữ sau khi sinh cần có chế độ sinh hoạt phù hợp: Lối sống lành mạnh bao gồm các hoạt động thể chất như đi dạo với bé hàng ngày, được nghỉ ngơi đầy đủ, ăn thực phẩm lành mạnh và tránh uống rượu bia.
                - Chia sẻ tâm trạng: Cảm thấy lo buồn là điều bình thường, không phải là gì đó phải xấu hổ. Đừng che giấu tình cảm của mình.
                - Các mẹ nên chủ trò chuyện với những người than của mình để nhận được sự quan tâm và chia sẻ việc chăm sóc em bé mới chào đời. Nhờ đó, mẹ sẽ không còn lo lắng không chăm sóc tốt cho con hay cảm thấy cô đơn, tủi thân.
                - Không nên quá lo lắng về việc mình có chăm con tốt hay không: Nếu vẫn lo lắng, bỡ ngỡ về cách chăm sóc em bé, mẹ đừng ngại trao đổi, chia sẻ với những người có kinh nghiệm.
                - Dành thời gian cho chính mình: Nếu bạn cảm thấy như thế giới đang đổ hết lên đầu bạn, hãy dành thời gian cho bản thân. Mặc quần áo đẹp, ra khỏi nhà và ghé thăm một người bạn hoặc làm một vài việc vặt. Hãy dành thời gian ở một mình với người bạn đời.
                - Tránh việc tự cô lập bản thân: Nói chuyện với chồng, gia đình và bạn bè của bạn về các cảm xúc của bạn. Hỏi các bà mẹ khác về những trải nghiệm của họ. Phá vỡ sự cô lập để giúp bạn cảm thấy hoà mình trở lại với cuộc sống.
            </pre>
        </Box>
        <Footer />
        </>
    )
}