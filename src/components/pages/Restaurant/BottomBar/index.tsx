import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { TabList } from './TabList';
import { About } from './Tabs/About';
import { Photos } from './Tabs/Photos';
import { Reviews } from './Tabs/Reviews';

export function BottomBar() {
  return (
    <Tabs colorScheme='red' isLazy lazyBehavior='keepMounted'>
      <TabList />

      <TabPanels>
        <TabPanel>
          <About />
        </TabPanel>

        <TabPanel>
          <Reviews />
        </TabPanel>

        <TabPanel>
          <Photos />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}