import { icons } from '@/constants/icons';
import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Movie() {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className="flex-1 bg-primary">
      <ScrollView>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
          }}
          className="w-full h-[550px] rounded-lg"
        />
        <View className="flex-1 px-2">
          <Text className="text-white text-sm font-bold mb-5">
            {data?.genres.map((genre) => genre.name).join(', ')}
          </Text>

          <Text className="text-white text-xl font-bold mb-2">
            {data?.title}
          </Text>
          <View className="flex-row items-center gap-x-2">
            <Text className="text-white text-sm font-bold mb-5">
              {data?.release_date?.split('-')[0]}
            </Text>
            <Text className="text-white text-sm font-bold mb-5">
              {data?.runtime} min
            </Text>
          </View>
          <View className="flex-row items-center gap-x-1 mb-5 bg-white-200 rounded-full px-2 py-1">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white text-sm font-bold ">
              {Math.round(data?.vote_average ?? 0)}/10
            </Text>
          </View>
          <Text className="text-white text-sm font-bold mb-5">
            {data?.overview}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
