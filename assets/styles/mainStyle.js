import {StyleSheet} from 'react-native';

export const mainStyle = StyleSheet.create({
  loader: {
    flex:1,
    backgroundColor: '#181818',
    justifyContent: "center"
  },
  mainContainer: {
    flex:1,
    backgroundColor: '#181818',
  },
  headerContainer: {
    height: 50,
    backgroundColor: '#202020',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerLogo: {
    width: 35,
    height: 35,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'pa-re',
    fontSize: 14
  },
  container: {
    padding: 10
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
  },
  itemContainer: {
    borderColor: '#303030',
    borderRadius: 10,
    marginVertical: 5
  }
});