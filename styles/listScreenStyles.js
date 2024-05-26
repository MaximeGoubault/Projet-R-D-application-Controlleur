import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    sortContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 10,
      backgroundColor:"#3D93A6",
    },
    sortLabel: {
      fontSize: 16,
      marginRight: 10,
      color: "#ffffff",
  
    },
    picker: {
      height: 50,
      width: 200,
      color: "#ffffff",
    },
    tripContainer: {
      flexDirection: 'row',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      alignItems: 'center'
    },
    textContainer: {
      flex: 1,
    },
    timeText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    detailsText: {
      fontSize: 14,
    },
    logo: {
      width: 100,
      height: 50, 
      marginLeft: 10,
      resizeMode: 'contain',
    },
  });