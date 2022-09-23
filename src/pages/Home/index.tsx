import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  ActivityIndicatorBase,
  ActivityIndicator,
} from 'react-native';
import { api } from '../../service/api';

import { CardUser } from '../../components/CardUser';
import { useNavigation } from '@react-navigation/native';

export interface UserProps {
  avatar_url: string;
  bio: string;
  name: string;
  public_repos: string;
}

export interface ResposProps {
  id: number;
  name_repo: string;
  full_name: string;
  url: string;
}

export const Home = () => {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [user, setUser] = useState<string>('');
  const [repos, setRepos] = useState<ResposProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();

  const loadUser = async () => {
    setIsLoading(true);
    const response = await api.get(`/users/${user}`);
    setIsLoading(false);
    setUserData(response.data);
    setUser('');
  };

  const loadRepos = async () => {
    const response = await api.get(`/users/marceloo0/repos`);

    setRepos(response.data);
    setUser('');
    navigate('Repository', { repos: response.data });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>GitHub</Text>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          value={user}
          onChangeText={(text) => setUser(text)}
          placeholder="Seu nome de usuário"
        />
      </View>
      <Button title="Buscar usuário" onPress={loadUser} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CardUser item={userData} onPress={loadRepos} />
      )}
      {repos.map((item) => (
        <>
          <Text style={styles.title}>{item.id}</Text>
          <Text style={styles.title}>{item.name_repo}</Text>
          <Text style={styles.title}>{item.full_name}</Text>
          <Text style={styles.title}>{item.url}</Text>
        </>
      ))}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapperInput: {
    width: '100%',
    height: 100,
    paddingHorizontal: 24,
  },
  title: {
    width: '100%',
    fontSize: 24,
    textAlign: 'center',
    padding: 24,
  },
  img: {
    width: 64,
    height: 64,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 16,
  },
});
