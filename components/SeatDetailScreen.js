import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { fetchTicketInfo, fetchUserProfile } from '../lib/utils';
import { companyLogos } from '../lib/ressource';

const SeatDetailScreen = ({ route }) => {
  const { tripTime, startLocation, endLocation, seatWagon, seatNumber, status, seatId, tripId } = route.params;
  const [ticketInfo, setTicketInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [detailsVisible, setDetailsVisible] = useState(false); // Ajout de l'état pour contrôler la visibilité

  useEffect(() => {
    const loadTicketAndUserInfo = async () => {
      const ticketData = await fetchTicketInfo(seatId, tripId);
      if (ticketData) {
        setTicketInfo(ticketData);
        const userData = await fetchUserProfile(ticketData.user_id);
        if (userData) {
          setUserInfo(userData);
        }
      }
    };
  
    loadTicketAndUserInfo();
  }, [seatId, tripId]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoBlock}>
        <Text style={styles.headerText}>Informations du Train</Text>
        <Text style={styles.text}>Départ : {startLocation}</Text>
        <Text style={styles.text}>Arrivé : {endLocation}</Text>
        <Text style={styles.text}>Heure : {tripTime}</Text>
        {/* Assurez-vous que le chemin d'accès et la clé sont corrects pour votre logo */}
        <Image source={companyLogos['VotreCompagnie']} style={styles.logo} />
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.headerText}>Informations de l'Utilisateur</Text>
        <Text style={styles.text}>Nom : {userInfo.nom}</Text>
        <Text style={styles.text}>Prénom : {userInfo.prenom}</Text>
        <Text style={styles.text}>Numéro de siège : {seatNumber}</Text>
          <Text style={styles.text}>Statut : {status}</Text>
          <Text style={styles.text}>Numéro de wagon : {seatWagon}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => setDetailsVisible(!detailsVisible)}>
        <MaterialIcons name={detailsVisible ? "expand-less" : "expand-more"} size={30} color="#000" />
      </TouchableOpacity>

      {detailsVisible && (
        <View style={styles.infoBlock}>
          <Text style={styles.headerText}>Informations Complémentaires</Text>
          <Text style={styles.text}>Ticket ID : {ticketInfo.ticket_id}</Text>
          <Text style={styles.text}>Seat ID : {seatId}</Text>

        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  infoBlock: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SeatDetailScreen;
