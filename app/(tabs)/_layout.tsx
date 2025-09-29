import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: any;
  label: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-1  gap-2 flex-row w-full min-h-16 justify-center  items-center mt-4 min-w-[112px] rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor={'#151312'} className="size-5" />
        <Text className="text-white text-sm font-semibold">{label}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className="flex flex-1 gap-2 flex-row w-full min-h-14 justify-center items-center mt-4 ">
      <Image source={icon} tintColor={'#A8B5DB'} className="size-5" />
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderTopWidth: 0,
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0d23',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.home} label="Home" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.search} label="Search" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.save} label="Saved" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.person} label="Profile" />
            </>
          ),
        }}
      />
    </Tabs>
  );
}
