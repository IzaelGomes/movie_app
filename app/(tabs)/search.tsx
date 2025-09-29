import { MovieCard } from '@/components/movieCard';
import { SearchBar } from '@/components/searchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

export default function Search() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchMovies,
  } = useFetch(() => fetchMovies({ query: searchTerm }), false);

  useEffect(() => {
    refetchMovies();
  }, [searchTerm]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 flex-1" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 16,
          paddingRight: 5,
          marginBottom: 10,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search for a movie"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="mt-10 self-center"
              />
            )}

            {moviesError && (
              <Text className="text-red-500">{moviesError.message}</Text>
            )}

            {!moviesLoading &&
              !moviesError &&
              searchTerm.trim() !== '' &&
              movies &&
              movies.length > 0 && (
                <Text className="text-white text-xl font-bold mb-5">
                  Search results for{' '}
                  <Text className="text-accent">{searchTerm}</Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
}
