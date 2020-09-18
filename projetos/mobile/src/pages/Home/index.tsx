import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  open_issues_count: number;
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(): Promise<void> {
    if (newRepo) {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Explore repositórios no Github.</Text>

      <View style={style.inputContainer}>
        <TextInput
          style={style.inputText}
          value={newRepo}
          onChangeText={(value) => setNewRepo(value)}
          placeholder="Digite o nome do repositório"
        />
      </View>

      <TouchableOpacity style={style.buttonContainer} onPress={handleAddRepository}>
        <Text style={style.buttonTitle}>Botão</Text>
      </TouchableOpacity>

      <ScrollView>
        {repositories.map(repository => (
          <View key={repository.full_name} style={style.cardContainer}>
            <Text style={style.cardTitle}>{repository.full_name}</Text>
            <Text style={style.cardDescription}>{repository.description}</Text>
            <Text style={style.cardIssues}>{`Issues: ${repository.open_issues_count}`}</Text>
          </View>
        ))}


      </ScrollView>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5"
  },

  title: {
    padding: 20,
    fontSize: 36,
    fontWeight: "bold",
    color: "#3a3a3a",
  },

  inputContainer: {
    height: 60,
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
  },

  inputText: {
    color: "#3a3a3a",
    fontSize: 24,
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",

    height: 60,
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#04d361",
    borderRadius: 15,
  },

  buttonTitle: {
    color: "#FFF",
    fontSize: 24,
  },

  cardContainer: {
    alignItems: "center",
    justifyContent: "center",

    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
  },

  cardTitle: {
    color: "#000",
    fontSize: 24,
  },

  cardDescription: {
    color: "#000",
    fontSize: 16,
    paddingVertical: 10,
  },

  cardIssues: {
    color: "#000",
    fontSize: 24,
  }
});
