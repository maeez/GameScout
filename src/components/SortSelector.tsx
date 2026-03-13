import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsChevronDown, BsCheckLg } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find((o) => o.value === sortOrder);

  const isActive = !!sortOrder;
  const activeBg = useColorModeValue("#1a1a2e", "#2a2a2a");
  const activeColor = useColorModeValue("#ffffff", "#ffffff");
  const defaultBg = useColorModeValue("#eceef2", "#1e1e1e");
  const defaultColor = useColorModeValue("#1a1a2e", "#e0e0e0");
  const activeItemBg = useColorModeValue("#f0f2f8", "#252525");
  const checkColor = useColorModeValue("#1a1a2e", "#ffffff");

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown size={12} />}
        bg={isActive ? activeBg : defaultBg}
        color={isActive ? activeColor : defaultColor}
        borderRadius="10px"
        fontWeight="500"
        fontSize="14px"
        px={4}
        height="38px"
        border="1px solid"
        borderColor={isActive
          ? useColorModeValue("#1a1a2e", "#3a3a3a")
          : useColorModeValue("#dde0e8", "#2a2a2a")}
        _hover={{
          bg: isActive ? useColorModeValue("#2d2d4e", "#333") : useColorModeValue("#dde0e8", "#252525"),
        }}
        _active={{ bg: isActive ? activeBg : defaultBg }}
        transition="all 0.2s"
      >
        {currentSortOrder?.label || 'Relevance'}
      </MenuButton>

      <MenuList
        minW="200px"
        py={2}
        px={2}
        borderRadius="12px"
        boxShadow="0 8px 30px rgba(0,0,0,0.12)"
      >
        <Text
          fontSize="11px"
          fontWeight="600"
          letterSpacing="0.08em"
          textTransform="uppercase"
          color={useColorModeValue("#9aa0b4", "#606060")}
          px={3}
          pb={2}
        >
          Sort By
        </Text>
        <MenuDivider mb={2} />
        {sortOrders.map((order) => {
          const isSelected = order.value === sortOrder;
          return (
            <MenuItem
              key={order.value}
              onClick={() => setSortOrder(order.value)}
              borderRadius="8px"
              fontWeight={isSelected ? "600" : "400"}
              fontSize="14px"
              bg={isSelected ? activeItemBg : "transparent"}
              mb="2px"
            >
              <HStack justify="space-between" width="100%">
                <Text>{order.label}</Text>
                {isSelected && <Box color={checkColor}><BsCheckLg size={12} /></Box>}
              </HStack>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;