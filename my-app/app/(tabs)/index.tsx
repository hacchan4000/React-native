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
       
        <Text style={styles.title}>
          myUdayana
        </Text>

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


      </ImageBackground>

    
      
    </View>
  )
}

export default app

const styles = StyleSheet.create({
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
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding: 6,
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
    justifyContent:"center"
  },
  card : {
    height:"30%",
    width:"90%",
    backgroundColor:"white",
    borderCurve: "circular",
    position: "relative"
  }
})