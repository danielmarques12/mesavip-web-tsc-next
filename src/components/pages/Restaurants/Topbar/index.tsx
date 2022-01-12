import { useContext } from 'react';
import { Badge, Box, Flex, Text } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Breadcrumb } from '../Breadcrumb';
import { RestaurantNameAndRate } from 'components/RestaurantNameAndRate';
import { BairroCulinaryAndPrice } from './BairroCulinaryAndPrice';
import { Badges } from '../Breadcrumb/Badges';

export function Topbar() {
  const { name, avg_rating, total_reviews } = useContext(RestaurantContext);

  return (
    <Flex direction='column' gap='3' mt='3'>
      <Breadcrumb />

      <Badges />

      <RestaurantNameAndRate
        restaurant={name}
        avg_rating={avg_rating}
        total_reviews={total_reviews}
        styles={{ fontSize: '36px', fontWeight: '700', ratingFontSize: '22px' }}
      />

      <BairroCulinaryAndPrice />
    </Flex>
  );
}
