import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, View } from 'react-native';
import { margin, padding } from '@/components/customs/styles';
import { HomeScreen } from '@/app/pages/main';
import { StoryStory } from '@/app/pages/story';
import { ProviderLayout } from '@/contexts/providerLayout';
import { ClickOutsideProvider } from 'react-native-click-outside';
import DetailMess from '@/app/pages/conversation/detailMess';
import { LoginSceen } from '@/app/pages/auth/login';
import SignupScreen from '@/app/pages/auth/signup';

export type RootStack = {
  main: any;
  story: any;
  'detail-mess': any;
  login: any,
  signup: any
}

export default function RootLayout() {
  const Stack = createStackNavigator<RootStack>();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <NavigationContainer independent={true} >
      <ClickOutsideProvider>
        <ProviderLayout>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <View style={styles.frameRoot} >
              <Stack.Navigator initialRouteName='main'>
                <Stack.Screen name='main' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='story' component={StoryStory} options={{ headerShown: false }} />
                <Stack.Screen name='detail-mess' component={DetailMess} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={LoginSceen} options={{ headerShown: false }} />
                <Stack.Screen name='signup' component={SignupScreen} options={{ headerShown: false }} />
              </Stack.Navigator>
            </View>
          </ThemeProvider>
        </ProviderLayout>
      </ClickOutsideProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  frameRoot: {
    // ...margin(-50, 0, 0),
    // ...padding(50, 0, 0),
    backgroundColor: '#000',
    height: '100%',
    // flex: 1
  }
})
