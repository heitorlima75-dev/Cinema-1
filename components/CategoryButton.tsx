import { Entypo } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

type CategoryButtonProps = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

export default function CategoryButton({
  title,
  selected,
  onPress,
}: CategoryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        selected ? styles.buttonSelected : styles.buttonUnselected,
      ]}
    >
      {selected && (
        <Entypo name="dot-single" size={16} color="#FFFFFF" />
      )}

      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 22,
  },
  buttonSelected: {
    backgroundColor: '#FF3366',
  },
  buttonUnselected: {
    backgroundColor: '#202536',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});