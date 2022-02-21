import { Flex, Text } from '@chakra-ui/react';
import { RestaurantContext } from 'pages/restaurant/[id]';
import { useContext } from 'react';

export function BairroCulinaryAndPrice() {
  const {
    address: { bairro },
    culinary,
  } = useContext(RestaurantContext);

  return (
    <Flex direction='column' gridGap='2' fontSize='14px'>
      <Flex gridGap='2'>
        <Text fontWeight='500'>{bairro}</Text>
        <Text> &bull; </Text>
        <Text decoration='underline'>{culinary}</Text>
      </Flex>

      <Text>
        Dishes priced around: <Text as='b'>$29</Text>
      </Text>
    </Flex>
  );
}