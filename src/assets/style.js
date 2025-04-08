import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
    width: '50%',
    height: 50,
    borderWidth: 2,
    borderColor: '#87CEFA',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  inputDate: {
    width: '40%',
    height: 50,
    borderWidth: 2,
    borderColor: '#87CEFA',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#F8F8F8'
  },
  button: {
    width: '50%',
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
    width: '50%',
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

  },
  dropDown: {
    borderWidth: 2,
    borderColor: '#87CEFA',
    borderRadius: 10,
    width: 610

  },
  passwordContainer: {
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 15,
  },
  buttonBackRoute: {
    backgroundColor: '#87CEFA',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'flex-start',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    backgroundColor: '#87CEFA', 
    padding: 20,
    zIndex: 1000
  },
  menuButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15, 
    paddingHorizontal: 18, 
    marginBottom: 40, 
    backgroundColor: '#0D47A1', 
    borderRadius: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 8, 
  },
  menuText: {
    fontSize: 18,
    color: '#FFFFFF', 
    marginLeft: 10, 
  },
  inputSchedulling: {
    width: '48%',
    height: 50,
    borderWidth: 2,
    borderColor: '#87CEFA',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
  },
  containerSchedulling:{
    flex: 1,
    flexDirection: 'row',   
    justifyContent: 'space-between', 
    gap: 10,               
    width: '100%', 
  }
});

export default styles;
