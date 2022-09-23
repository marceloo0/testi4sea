import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  ActivityIndicatorBase,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { CardRepos } from '../../components/CardRepos';
import { api } from '../../service/api';

interface UserProps {
  avatar_url: string;
  bio: string;
  name: string;
  public_repos: string;
}

interface ResposProps {
  id: number;
  name_repo: string;
  full_name: string;
  url: string;
}

interface RouteParams {
  repos: any;
}

export const Repository = () => {
  const route = useRoute();
  const { repos } = route.params as RouteParams;

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>GitHub</Text>
        {repos.map((item) => (
          <>
            <CardRepos item={item} />
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapperInput: {
    width: '100%',
    height: 200,
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 24,
    alignItems: 'center',
  },
});
