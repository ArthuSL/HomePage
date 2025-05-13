import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {
  function handleLinkPress(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Image
            source={require('../assets/logocangUp-horizontal-claro.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>
          <TextInput style={styles.input} placeholder="Email/CPF/CNPJ" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLinkPress('https://drive.google.com/drive/my-drive?hl=pt-br')}>
           <Text style={styles.linkText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            Não tem uma conta? 
            <TouchableOpacity onPress={() => handleLinkPress('https://drive.google.com/drive/my-drive?hl=pt-br')}>
              <Text style={styles.linkText}> Criar conta</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={styles.footer}>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD992',
  },
  header: {
    flex: 1,
    backgroundColor: '#BEACDE',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  body: {
    flex: 2,
    margin: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#d9d9d9',
    width: '90%',
    padding: 12,
    borderRadius: 30,
    marginBottom: 20,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#FFBE31',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  linkText: {
    color: '#522a91', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 5,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#BEACDE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logo: {
    width: '80%',
  }
});

