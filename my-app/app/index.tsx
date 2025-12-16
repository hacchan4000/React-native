import { View , Text , StyleSheet, ImageBackground} from 'react-native'
import { Link } from 'expo-router'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/unudBg.jpg')}
        resizeMode="cover"
        style = {styles.image}
      >
        <div style={styles.card}>

        </div>
        <Text style={styles.title}>
          myUdayana
        </Text>
        <Link href={"/explore"} style={styles.link}>
          Explore
        </Link>
      </ImageBackground>

      <div>

      </div>
      
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