import { Box, Grid, Show, GridItem, Flex, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const mutedColor = useColorModeValue("#6b7280", "#808080");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '250px 1fr',
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <Flex align="center" marginBottom={3}>
              <Show below="lg">
                <IconButton
                  aria-label="Open genres"
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                  marginRight={3}
                  variant="outline"
                />
              </Show>
              <GameHeading />
            </Flex>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="11px"
            fontWeight="600"
            letterSpacing="0.08em"
            textTransform="uppercase"
            color={mutedColor} mx={3}>Browse by Genre</DrawerHeader>
          <DrawerBody>
            <GenreList onSelectGenre={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HomePage