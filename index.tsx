import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Barnachea, Jasmine P.</Text>
      
      {}
      <Link href="/profile" style={styles.button}>
        Go to Profile
      </Link>

      {}
      
      <Link href="/bookmark" style={styles.button}>
        Go to Bookmark
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  button: {
    
    fontSize: 15,
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 20,  
  },
});
