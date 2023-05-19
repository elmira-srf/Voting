import React, {useState} from 'react';
import {View, Text, Alert, Button, StyleSheet, ScrollView} from 'react-native';
import VotingToggleButton from '../components/VotingToggleButton';

const UserScreen = ({navigation}) => {
  const [people, setPeople] = useState([
    {name: 'Person 1', vote_count: 0},
    {name: 'Person 2', vote_count: 0},
    {name: 'Person 3', vote_count: 0},
    {name: 'Person 4', vote_count: 0},
    {name: 'Person 5', vote_count: 0},
    {name: 'Person 6', vote_count: 0},
    {name: 'Person 7', vote_count: 0},
    {name: 'Person 8', vote_count: 0},
    {name: 'Person 9', vote_count: 0},
  ]);

  const handleVote = index => {
    let newPeople = [...people];
    newPeople[index].vote_count++;
    setPeople(newPeople);
    Alert.alert(`Your vote for ${newPeople[index].name} is applied.`);
  };

  const handleUnVote = index => {
    let newPeople = [...people];
    newPeople[index].vote_count--;
    setPeople(newPeople);
    Alert.alert(`Your vote for ${newPeople[index].name} is cancelled.`);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Go to Admin"
        onPress={() => navigation.navigate('Admin')}
      />
      <ScrollView>
        {people.map((person, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.text}>{person.name}</Text>
            <VotingToggleButton
              onVote={() => handleVote(index)}
              onUnVote={() => handleUnVote(index)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    fontSize: 18,
  },
});
export default UserScreen;
