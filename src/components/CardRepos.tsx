import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { ResposProps } from '../pages/Home';

interface CardUserProps extends TouchableOpacityProps {
  item: ResposProps;
}

export const CardRepos = ({ item, ...rest }: CardUserProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text style={styles.description}>{item.id}</Text>
          <View style={{ marginLeft: 14 }}>
            <Text style={styles.description}>{item.full_name}</Text>
            <Text style={styles.title}>{item.name_repo}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    border: 1,
    borderBottomWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    paddingVertical: 12,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 25,
  },
  title: {
    color: '#333',
    fontSize: 24,
    marginLeft: 12,
  },
  titleNumber: {
    color: 'blue',
    fontSize: 24,
  },
  description: {
    color: 'blue',
    fontSize: 12,
  },
});
