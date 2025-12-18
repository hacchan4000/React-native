import { StyleSheet, Appearance, Platform, View, ScrollView, FlatList, Text, Image} from "react-native";
import { Colors } from '@/constants/theme';
import { SafeAreaView } from "react-native-safe-area-context";

import GAMBAR_DOSEN from '@/constants/GambarDosen.js' // ini gawsa pake {} karena export default
import { LIST_DOSEN } from '@/constants/NamaDosen' // pake {} karena export biasa

const fakultas = () => {
    const skemaWarna = Appearance.getColorScheme();
    const theme = skemaWarna === 'dark' ? Colors.dark : Colors.light;
    const styles = buatStyle(theme, skemaWarna)

    

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView; //ini untuk bedain web sm mobile dalam flat list
    
    const pemisah = () => <View style={styles.separator} />
    const footer = () => <View> End of List</View>


  return (
    <Container> {/* ini semacem div paling luar nya gitu */}
    {/* FlatList itu untuk tunjukin data yang dirender aj*/}
        <FlatList  
        data={LIST_DOSEN} // datanya itu harus berupa dict trs nanti di map pake key
        keyExtractor={(item) => item.id.toString()} // ini dipake kalo dalam dict gaad key yg tulisannya "key" gt jd di setting pake id skrg
        showsVerticalScrollIndicator = {false} // biar g keliatan scroll bar di hp

        //komponen bawaan flatlist
        contentContainerStyle = {styles.contentContainer} // ini untuk style container/ parent dr flatlist
        ItemSeparatorComponent={pemisah}
        ListFooterComponent={footer}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text> Kosong</Text>}

        renderItem={({item}) => ( // ini item yg akan ditampilkan/render di web ini kea loop gt
            <View style={styles.baris}>  {/* ini juga kea div gitu */}
                <View style={styles.textBaris}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                </View>
                <Image source={GAMBAR_DOSEN[item.id]} style={styles.gambarBaris}/>
            </View>
        )}/>
    </Container>
  )
}

function buatStyle(theme:any, skemaWarna:any) {
    const tentuinWarna = () => {
        return skemaWarna === 'dark' ? '#ffff' : '#000000ff'
    }

    return StyleSheet.create({
        title : {
            color: 'white',
            textAlign: 'left',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 120,
        },
        desc: {

        },
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: skemaWarna === 'dark' ? '#ffff' : '#000000ff',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10
        },
        footerComp: {
            marginHorizontal: 'auto',
            color: tentuinWarna(),
        }, 
        baris: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: tentuinWarna(),
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',

        },
        textBaris: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1
        },
        gambarBaris: {
            width: 100,
            height: 100,
        }

    })
}

export default fakultas
