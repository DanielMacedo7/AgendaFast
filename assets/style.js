import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#87CEFA',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#87CEFA',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#87CEFA', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  footerButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#87CEFA',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: 10, 
    backgroundColor: '#FFFFFF',
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 5,
  },
  alertaSignUp: {
    padding: 10,
    color: '#000',
    fontSize: 14,
    textAlign: 'justify'

  }

});

export default styles;
