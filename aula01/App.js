import { Text, View, ScrollView, Button, TouchableOpacity, Alert } from 'react-native';
import {Gatinho} from './components/Gatinho/index.jsx'
import {styles} from './styles'

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Hello World</Text>
        <Gatinho nome="Fubá"/>
        <Button title="Clique aqui" color="rgb(125, 123, 23)"/>
        <TouchableOpacity onPress={Alert.alert("apertou")} style={styles.botao}><Text style={styles.texto}>Touchable Opacity</Text></TouchableOpacity>
    </View>
  )
}

