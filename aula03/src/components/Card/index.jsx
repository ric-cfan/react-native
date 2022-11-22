import { Text, View } from "react-native"
import { styles } from "./styles"

const Card = ({ item }) => {
    return(
        <View style={styles.taskContainer}>
            <Text style={styles.texto}>{item.titulo}</Text>
            <Text style={styles.texto}>{item.descricao}</Text>
        </View>
    )  
}

export default Card