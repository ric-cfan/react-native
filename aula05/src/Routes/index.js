import { RotasPrivadas } from "./RotasPrivadas"
import { RotasPublicas } from "./RotasPublicas"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContexts"
import { View, ActivityIndicator } from "react-native"


const Routes = () => {
   const {logado, loading} = useContext(AuthContext)

   if(loading) return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <ActivityIndicator size='large' color='#0000GG' />
      </View>
   )

   return (
      <>
         {logado ? <RotasPrivadas/> : <RotasPublicas />}
      </>
   )
}
export default Routes




// const [logado, setLogado] = useState(true)
// {logado ? <RotasPrivadas /> : <RotasPublicas />}