import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <TextInput style={styles.input} placeholder="Email/CPF/CNPJ" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>Esqueci minha senha</Text>
        <Text style={styles.registerText}>
          Não tem uma conta? <Text style={styles.boldLink}>Criar conta</Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <Text>burra da olivia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#d9d9d9',
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
    backgroundColor: '#d9d9d9',
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
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  registerText: {
    marginTop: 5,
    textAlign: 'center',
  },
  boldLink: {
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

