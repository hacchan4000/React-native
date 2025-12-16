import { View , Text , StyleSheet, ImageBackground} from 'react-native'


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
        <Text style={styles.text}>
          myUdayana
        </Text>
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
  text : {
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold'
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