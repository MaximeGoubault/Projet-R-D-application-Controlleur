
import { View,StyleSheet } from 'react-native';

const QRCodeScreen = () => {
  <View> La fonctionnalité de lecture de QR Code n'ai pas encore implémentée
    </View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  buttonTouchable: {
    padding: 16,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 20,
  },
  qrData: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default QRCodeScreen;
