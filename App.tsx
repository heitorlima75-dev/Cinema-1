import { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';

const categorias = ['Todos', 'Ação', 'Animação', 'Aventura'];

export default function App() {
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0D14" />

      <Header />

      <SearchBar
        value={busca}
        onChangeText={setBusca}
        onClear={() => setBusca('')}
      />

      <ScrollView
        horizontal
        style={styles.categoryScroll}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerCategory}
      >
        {categorias.map((categoria) => (
          <CategoryButton
            key={categoria}
            title={categoria}
            selected={categoriaSelecionada === categoria}
            onPress={() => setCategoriaSelecionada(categoria)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D14',
    paddingTop: 40,
  },
  categoryScroll: {
    flexGrow: 0,
  },
  containerCategory: {
    alignItems: 'center',
    gap: 8,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});