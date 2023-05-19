import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const VotingToggleButton = ({onVote, onUnVote}) => {
  const [hasVoted, setHasVoted] = useState(false);

  const handlePress = () => {
    setHasVoted(!hasVoted);
    !hasVoted ? onVote() : onUnVote();
  };

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: hasVoted ? 'blue' : 'red'}]}
      onPress={handlePress}>
      <Text style={styles.text}>{hasVoted ? 'Chosen' : 'Vote'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VotingToggleButton;
