import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text>Logo</Text>
        </View>
        <View>
            <Text>Bem vindo de volta!</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textinput: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: '7px',
    }
  });
