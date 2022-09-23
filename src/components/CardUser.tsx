import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { UserProps } from '../pages/Home';

interface CardUserProps extends TouchableOpacityProps {
  item: UserProps;
}

export const CardUser = ({ item, ...rest }: CardUserProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={styles.img}
          source={{
            uri: item.avatar_url,
          }}
        />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <View style={{ marginLeft: 14 }}>
            <Text style={styles.description}>Quantidade de repos: </Text>
            <Text style={styles.titleNumber}>{item.public_repos}</Text>
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
    color: 'blue',
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
