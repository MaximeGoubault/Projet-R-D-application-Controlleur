import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#003366',
      padding: 20,
      alignItems: 'center',
    },
    logo: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    infoContainer: {
      marginLeft: 10,
    },
    infoText: {
      color: '#ffffff',
      fontSize: 16,
      marginBottom: 5,
    },
    wagonBlock: {
      backgroundColor: '#e9e9e9',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 20,
    },
    wagonTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    seatRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    },
    seatContainer: {
      alignItems: 'center',
      margin: 5,
    },
    seatText: {
      marginTop: 4,
    },
    spacer: {
      width: 80, // Ajustez selon vos besoins
    },
  });