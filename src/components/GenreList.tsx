import {
  Box,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Show,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

interface Props {
  onSelectGenre?: () => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const activeBg = useColorModeValue("#1a1a2e", "#2a2a2a");
  const activeColor = useColorModeValue("#ffffff", "#ffffff");
  const hoverBg = useColorModeValue("#eceef2", "#1e1e1e");
  const textColor = useColorModeValue("#1a1a2e", "#e0e0e0");
  const mutedColor = useColorModeValue("#6b7280", "#808080");
  const borderColor = useColorModeValue("#e2e4eb", "#2a2a2a");

  if (error) return null;
  if (isLoading) return <Spinner size="sm" mt={4} />;

  return (
    <Box paddingY={2}>
      <Show above="lg">
        <Box marginTop={8} marginBottom={4} paddingX={3}>
          <Text
            fontSize="11px"
            fontWeight="600"
            letterSpacing="0.08em"
            textTransform="uppercase"
            color={mutedColor}
          >
            Browse by Genre
          </Text>
        </Box>
      </Show>

      <List spacing={1}>
        {data?.results.map((genre) => {
          const isActive = genre.id === selectedGenreId;
          return (
            <ListItem key={genre.id}>
              <HStack
                paddingX={3}
                paddingY="8px"
                borderRadius="10px"
                cursor="pointer"
                bg={isActive ? activeBg : "transparent"}
                transition="all 0.15s ease"
                role="group"
                onClick={() => {
                  onSelectGenre?.();
                  setSelectedGenreId(genre.id);
                }}
                _hover={{
                  bg: isActive ? activeBg : hoverBg,
                }}
              >
                <Image
                  boxSize="28px"
                  borderRadius="6px"
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                  opacity={isActive ? 1 : 0.85}
                  transition="opacity 0.15s"
                  _groupHover={{ opacity: 1 }}
                />
                <Text
                  fontSize="14px"
                  fontWeight={isActive ? "600" : "400"}
                  color={isActive ? activeColor : textColor}
                  transition="all 0.15s"
                  _groupHover={{
                    color: isActive ? activeColor : textColor,
                    fontWeight: "500",
                  }}
                >
                  {genre.name}
                </Text>

                {isActive && (
                  <Box
                    ml="auto"
                    width="6px"
                    height="6px"
                    borderRadius="full"
                    bg={activeColor}
                    opacity={0.6}
                  />
                )}
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default GenreList;