import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onClear,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#94A3B8" />

      <TextInput
        placeholder="Buscar filme por título"
        placeholderTextColor="#64748B"
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />

      {value.length > 0 && (
        <Pressable onPress={onClear}>
          <Ionicons name="close-circle" size={18} color="#94A3B8" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161A28',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#262D42',
    paddingHorizontal: 16,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
  },
});