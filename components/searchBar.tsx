import { icons } from '@/constants/icons';
import { Image, TextInput, View } from 'react-native';

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) => {
  return (
    <View className=" flex-row gap-2 items-center rounded-full bg-dark-200 px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={'#ab8bff'}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        className="flex-1 ml-2 text-white"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#ab8bff'}
      />
    </View>
  );
};
