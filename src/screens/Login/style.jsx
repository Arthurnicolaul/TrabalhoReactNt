import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    width: '100%',
  },
  title: {
    marginTop: 20,
    color: 'black',
    width: '100%',
    fontSize: 18,
  },
  boxLogin: {
    width: '100%',
  },
  boxInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    marginTop: 15,
    marginBottom: 15,
  },
  country: {
    backgroundColor: '#dddd',
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 15,
    padding: 10,
  },
  number: {
    backgroundColor: '#dddd',
    height: '100%',
    width: '70%',
    borderRadius: 15,
  },
  buttonNumber: {
    backgroundColor: 'black',
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  boxOr: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
});