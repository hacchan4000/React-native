// ini halaman utama myUdayana
import { View , Text , StyleSheet, ImageBackground, Pressable} from 'react-native'
import { Link } from 'expo-router'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/unudBg.jpg')}
        resizeMode="cover"
        style = {styles.banner}
      >
         {/* ini untuk kartu online unud */}
        <View style={styles.card}> 
          
           <View style={styles.card2}>
             <ImageBackground
              source={require('@/assets/images/Logo-unud-baru.png')}
              resizeMode='cover'
              style = {styles.logo}
              />
              <View style={styles.textLogo2}>
                <Text style={styles.textLogo}>KARTU TANDA MAHASISWA</Text>
                <Text style={styles.textLogo}>UNIVERSITAS UDAYANA</Text>
              </View>
              
              <ImageBackground
              source={require('@/assets/images/logoBNI.png')}
              resizeMode='contain'
              style={styles.logo2}
              />
           </View>

           <ImageBackground
           source={require('@/assets/images/Logo-unud-baru2.png')}
              resizeMode='contain'
              style={styles.logo3}
           />

           <View style={styles.card2}>
              <View style={styles.esim}></View>
              <View style={styles.pasFoto}></View>
           </View>

           <View style={{marginLeft: 15, marginBottom: 20}}>

            <Text style={styles.textId}>0123 4567 8910 1112</Text>
            <Text style={{fontSize: 17, fontWeight: '400'}}>Aditya Chandra Nugraha</Text>
            <Text style={{fontSize: 10}}>S1 TEKNIK INFORMATIKA 2308561092</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.barcode}></View>
              <ImageBackground
              source={require('@/assets/images/logoGPN.png')}
              resizeMode='contain'
              style={{width: 50, height: 30}}
              />
            </View>
            
           </View>

           <View>
           
           </View>
          
        </View>
   
        {/* ini untuk navigasi ke halaman lain */}
        
        
      </ImageBackground>

      {/* ini untuk balanced */}
      <View style={styles.balanceContainer}>
        <View style={styles.balance}>
          <Text></Text>

        </View>
        
      </View>

      {/* ini untuk fitur-fitur lain yang i havent thought of */}
      <View>
        <View style={styles.fiturBox}>

        </View>
      </View>

    
      
    </View>
  )
}

export default app

const styles = StyleSheet.create({ // ini untuk css nya pake camel case
  container : {
    flex : 1,
    flexDirection: 'column',

  },
  title : {
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 120,
  },
  link : {
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    textDecorationLine:"underline",
    padding: 4,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding: 6,
    marginBottom: 5,
    
  },
  buttonText : {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine:"underline",
    padding: 4,
  },
  banner:{
    width: "100%",
    height: "50%",
    flex: 1,
    resizeMode: "contain",
    justifyContent:"center",
    position: 'absolute'
  },


  textLogo : {
    fontSize: 7,
    color: 'white'
  },
  textLogo2 : {
    marginVertical: 15,
  },
  textId : {
    fontWeight: '600',
    fontSize: 17
  },
  textId2 : {
    fontWeight: '400',
    fontSize: 10
  },

  logo : {
    width: 25,
    height: 30,
    margin: 10,

  },
  logo2 : {
    width: 80,
    height: 40,
    marginHorizontal: 90,
    marginTop: 5
  },
  logo3 : {
    width: 150,
    height: 150,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
    opacity: 0.2,
    marginRight: 5
  },
  card : {
    height:"51%",
    width:"86%",
    backgroundColor:"#1f4b9cff",
    position: 'relative',
    borderRadius: 20,

    alignSelf: "center",
    marginTop: 90
  },
  card2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pasFoto: {
    height: 70,
    width: 60,
    backgroundColor: '#c01a1aff',
    marginRight: 23,
    marginTop: 5
  },
  esim : {
    height: 30,
    width: 40,
    backgroundColor: '#cea731ff',
    borderRadius: 8,
    marginLeft: 25,
    alignSelf: 'center'
  },
  barcode : {
    width: 180,
    height: 25,
    backgroundColor: '#ffff',
    position: 'relative',
    marginTop: 5
  },
  balanceContainer: {
    justifyContent: 'center',
   
    marginTop: 380

  }
  ,
  balance : {
    width: '95%',
    height: 80,
    backgroundColor: '#d4d9e7ff',
    borderStyle: 'solid',
    borderRadius: 20,
    alignSelf: 'center'
  },
  fiturBox : {
    width: '95%',
    height: 290,
    marginTop: 10,
    backgroundColor: '#d7dae3ff',
    alignSelf: 'center',
    borderStyle: 'solid',
    borderRadius: 20,
  }
})