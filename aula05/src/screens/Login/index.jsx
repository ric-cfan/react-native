import { StyleSheet, Text, View, Button, TextInput } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { login } from "../../services/auth";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContexts";
import {MensagemContext} from "../../contexts/MensagemContext";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { loginContext } = useContext(AuthContext)

    const handleLogin = async () => {
        if (userName != "" && password != "") {
            loginContext(userName, password);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <TextInput style={styles.textInput} placeholder="INSIRA SEU LOGIN" onChangeText={setUserName} value={userName} />

            <TextInput style={styles.textInput} placeholder="INSIRA SUA SENHA" onChangeText={setPassword} value={password} />

            <Button title="ENTRAR" onPress={() => handleLogin()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: "center",
    },
    textInput: {
        borderWidth: 1,
        width: "80%",
        alignItems: "center",
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default Login;