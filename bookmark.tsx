import { Text, View, StyleSheet } from 'react-native';

export default function BookmarkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Bookmark</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
