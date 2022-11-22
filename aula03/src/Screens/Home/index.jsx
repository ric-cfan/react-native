import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { getTasks } from '../../services/taskClient'
import Card from '../../components/Card';

const Home = ({navigation}) => {

  const [tasks, setTasks] = useState([])

  const fetchData = async () => {
    const taskList = await getTasks();
    setTasks(taskList)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        keyExtractor={ item => item.id}
        renderItem={Card}
      />
      <Button title='Detalhes' onPress={() => navigation.navigate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313"
  },
  texto: {
    color: "#fff"
  }
});

export default Home