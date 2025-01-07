import { Link } from 'expo-router';
import { View, Text} from 'react-native';

export default function Index() {
  return (
    <View className="justify-center items-center flex-1">
        <Text className="font-bold text-lg my-10">Welcome to Roscout</Text>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/properties/1">Properties</Link>
    </View>
  );
}