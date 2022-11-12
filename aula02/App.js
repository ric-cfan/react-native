// import React, { useState } from 'react';
// import {Text, View, ScrollView, Button, TouchableOpacity, TextInput, Image,} from 'react-native';
// import {styles} from './styles';
// import {Gatinho} from './components/Gatinho';
// import Splash from './assets/splash.png'

// export default function App() {
//   const [nome, setNome] = useState("")
//   const [isTrue, setIsTrue] = useState(false)

//   const handlePress = () => {
//     // console.log("Pressionei")
//     // alert("Pressionei")
//     setIsTrue(!isTrue)
//   }

//   const trocarImagem = () => {

//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{ width: 50, height: 50}}/>
//       <Image source={ require('./assets/adaptive-icon.png')} style={{ width: 50, height: 50}}/>
//       <Image source={Splash} style={{width: 200, height: 80}} />

//       <Image 
//         source={isTrue ? require('./assets/adaptive-icon.png') : {uri: "https://reactnative.dev/img/tiny_logo.png"}} 
//         style={{width: 50, height: 50}}
//       />
//       <Text style={styles.texto}>Hello World!!</Text>
//       <Gatinho nome="Fubá" />
//       <Text style={styles.texto}>Input: {nome}</Text>
//       <Text style={styles.texto}>{ isTrue ? "É Verdadeiro" : "É Falso"}</Text>
// <TextInput 
//         style={{backgroundColor: "#fff", marginBottom: 20, width: '80%'}}
//         placeholder='Digite o nome do Gatinho'
//         onChangeText={setNome}
//         value={nome}
//       />
//       <Button onPress={handlePress} title="clique aqui" color="#215491" />
//       <TouchableOpacity onPress={() => handlePress()} style={styles.botao}>
//         <Text style={styles.texto}>Touchable Opacity</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// import { StyleSheet, Text, View } from "react-native"

// const Flexbox = () => {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.texto}>FLEXBOX</Text>

//             <View style={styles.superior}></View>
//             <View style={styles.medio}></View>
//             <View style={styles.inferior}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#313131'
//     }, 

//     texto: {
//       color: '#fff',
//       fontSize: 50,
//       textAlign: 'center',
//       marginBottom: 100
//     },

//     superior: {
//       height: 50,
//       width: 50,
//       backgroundColor: "powderblue"
//     },

//     medio: {
//       height: 100,
//       width: 100,
//       backgroundColor: "skyblue",
//       // alignSelf: 'flex-end'
//     },

//     inferior: {
//       height: 150,
//       width: 150,
//       backgroundColor: "steelblue"
//     }
// })

// export default Flexbox

import { StyleSheet, Text, View } from "react-native"

const Flexbox = () => {
    return(
        <View style={styles.container}>
            <View style={styles.superior}></View>
            <View style={styles.superior}></View>
            <View style={styles.superior}></View>

            <View style={styles.medio}></View>
            <View style={styles.medio}></View>
            <View style={styles.medio}></View>

            <View style={styles.inferior}></View>
            <View style={styles.inferior}></View>
            <View style={styles.inferior}></View>

            <View style={styles.baixo}></View>
            <View style={styles.baixo}></View>
            <View style={styles.baixo}></View>
        </View>
    )
}

const numero = 103;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'space-around',
      backgroundColor: '#313131'
    }, 

    superior: {
      height: numero,
      width: numero,
      backgroundColor: "powderblue",
      // marginTop: 100
    },

    medio: {
      height: numero,
      width: numero,
      backgroundColor: "skyblue",
      // alignSelf: 'flex-end'
    },

    inferior: {
      height: numero,
      width: numero,
      backgroundColor: "steelblue"
    },

    baixo: {
      height: numero,
      width: numero,
      backgroundColor: "blue",
      // marginBottom: 100
    }
})

export default Flexbox