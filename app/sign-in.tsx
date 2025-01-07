import images from "@/constants/images";
import icons from "@/constants/icons";
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Platform } from "react-native"
import {SafeAreaView} from "react-native-safe-area-context";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";

const SignIn = () => {
    const {refetch, loading, isLoggedIn} = useGlobalContext();      
    
    const handleLogin = async () => {
        const result = await login();
        if (result) {
          refetch();
        } else {
          Alert.alert("Error", "Failed to login");
        }
    };
    
    return (
        <SafeAreaView 
            style={{ paddingTop: Platform.OS === "web" ? 20 : 0 }} 
            className="bg-white h-full"
        >
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <Image 
                    source={images.onboarding} 
                    style={{ width: "100%", height: "66%" }}
                    // className="w-full !h-4/6 m-auto" 
                    resizeMode="contain" 
                />
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                        Welcome To Real Scout
                    </Text>

                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer To {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Login to Real Scout with Google
                    </Text>
                    
                    <TouchableOpacity
                        style={{ marginBottom: Platform.OS === "web" ? 30 : 15 }} 
                        onPress={handleLogin}
                        className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
                    >
                        <View className="flex flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn;