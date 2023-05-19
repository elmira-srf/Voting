import React from 'react';
import {Button, View} from 'react-native';

const AdminScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AdminScreen;
