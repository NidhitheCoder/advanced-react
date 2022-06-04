import * as React from 'react';
import {
  Box,
  Text,
  VStack,
  Code,
  Grid
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Card from './shared/Card';

export const App = () => (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/* Main app section starts here */}
        <VStack spacing={8}>
          <Text color="cucumbar">
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Card>Heyy</Card>
        </VStack>
      </Grid>
    </Box>
);
