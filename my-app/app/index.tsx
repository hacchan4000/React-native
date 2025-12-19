// ini halaman utama myUdayana
import { View , Text , StyleSheet, ImageBackground, Pressable} from 'react-native'
import { Link } from 'expo-router'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/unudBg.jpg')}
        resizeMode="cover"
        style = {styles.image}
      >
        <View style={styles.card}> 
           {/* ini untuk kartu online unud */}
        </View>
       
   
        {/* ini untuk navigasi ke halaman lain */}
        <Link href={"/explore"} style={{marginHorizontal:"auto"}}> {/* ubah link jd button */ }
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Explore
            </Text>
          </Pressable>
        </Link>
        <Link href={"/contact"} style={{marginHorizontal:"auto"}}> {/* ubah link jd button */ }
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Contact
            </Text>
          </Pressable>
        </Link>
        <Link href={"/fakultas"} style={{marginHorizontal:"auto"}}> {/* ubah link jd button */ }
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Dosen
            </Text>
          </Pressable>
        </Link>
        <Link href={"/todo"} style={{marginHorizontal:"auto"}}> {/* ubah link jd button */ }
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              To Do list
            </Text>
          </Pressable>
        </Link>


      </ImageBackground>

      

    
      
    </View>
  )
}

export default app

const styles = StyleSheet.create({ // ini untuk css nya pake camel case
  container : {
    flex : 1,
    flexDirection: 'column'
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
  image:{
    width: "100%",
    height: "50%",
    flex: 1,
    resizeMode: "contain",
    justifyContent:"center",
    position: 'absolute'
  },
  card : {
    height:"48%",
    width:"85%",
    backgroundColor:"#1f4b9cff",
    position: 'absolute',
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 90
  },
  cardContainer: {
    
  }
})