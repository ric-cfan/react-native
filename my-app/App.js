import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

export default function App() {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.texto1}>Hello world!</Text>
        {/* <StatusBar style="auto" /> */}
        <Button 
          title="Aperta"
          color="grey"
          onPress={() => Alert.alert('Apertou')
        } />
      </View>

    <View style={styles.container2}>
      <Text style={styles.texto2}>opa</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#000',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  container2: {
    flex: 1,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  texto1: {
    fontSize: 60,
    color:'white'
  },

  texto2: {
    fontSize: 60,
    color:'black'
  }
})
