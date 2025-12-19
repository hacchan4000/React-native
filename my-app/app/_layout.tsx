// file ini untuk routing ke tiap halaman ato dir
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Appearance } from 'react-native'; // appereance untuk nunjukin preferensi tema pengguna
import { Colors } from '@/constants/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme(); //ini akan ngasi skema warna user
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light; // kalo user suka gelap maka kembaliin tema gelap

  return (
    
    <Stack screenOptions={{headerStyle: {backgroundColor:theme.headerBackground},  // style untuk header 
    headerTintColor: theme.text, headerShadowVisible: false}}>

        <Stack.Screen name="index" options={{ headerShown: false , title: 'Home'}} />
        <Stack.Screen name="contact" options={{ headerShown: true , title: 'Contact', headerTitle: 'Contact Us'}} />
        <Stack.Screen name="explore" options={{ headerShown: true , title: 'Explore', headerTitle: 'Explore'}} />

        <Stack.Screen name="fakultas" options={{ headerShown: true , title: 'Fakultas', headerTitle: 'Dosen unud'}} />
        <Stack.Screen name="todo" options={{ headerShown: false , title: 'ToDO', headerTitle: 'List Tugas'}} />

        {/* <Stack.Screen name="(fakultas)" options={{ headerShown: false }} />  */}
        {/* ini biar semua page di fakultas g nunjukin header */}

        {/* <Stack.Screen name="index" options={{ title: 'Home' , headerShown: false}} />
        <Stack.Screen name="explore" options={{ title: 'Explore' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact' }} /> */}

        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <StatusBar style="auto" />

    </Stack>
      
    
  );
}
