import React, { useEffect, useState } from 'react';
import { RefreshControl, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { companyLogos } from '../lib/ressource'; 
import { fetchSeatsForTrip } from '../lib/utils'; 
import {styles} from '../styles/detailScreenStyles';
const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { trip } = route.params;
  const [seatsByWagon, setSeatsByWagon] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const fetchAndProcessSeatsData = async () => {
    const seatsData = await fetchSeatsForTrip(trip.train_id, trip.trip_id);
    const sortedSeatsData = seatsData.sort((a, b) => parseInt(a.seat_number, 10) - parseInt(b.seat_number, 10));
    const groupedByWagon = processSeatData(sortedSeatsData, trip.trip_id);
    setSeatsByWagon(groupedByWagon);
  };

  useEffect(() => {
    fetchAndProcessSeatsData();
    const intervalId = setInterval(fetchAndProcessSeatsData, 600000);
    return () => clearInterval(intervalId);
  }, [trip.train_id, trip.trip_id]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchAndProcessSeatsData().finally(() => setRefreshing(false));
  }, [trip.train_id, trip.trip_id]);

  const processSeatData = (seatsData, tripId) => {
    return seatsData.reduce((acc, seat) => {
      const wagon = seat.wagon;
      if (!acc[wagon]) {
        acc[wagon] = [];
      }
      acc[wagon].push({
        seatNumber: seat.seat_number,
        status: seat[tripId] || 'notreserve',
        seatId: seat.seat_id,
        seatWagon: seat.wagon
      });
      return acc;
    }, {});
  };

  const getSeatColor = (status) => {
    switch (status) {
      case 'notreserve': return 'grey';
      case 'reserve': return '#003366'; // Bleu foncé
      case 'awaiting': return 'yellow';
      case 'valid': return 'green';
      case 'invalid': return 'red';
      default: return 'grey'; // Couleur par défaut si le statut est inconnu
    }
  };

  const renderSeatsInWagon = (seats) => {
    const rows = [];
    for (let i = 0; i < seats.length; i += 4) {
      const row = seats.slice(i, i + 4);
      if (row.length > 2) {
        row.splice(2, 0, { spacer: true, id: `spacer-${i}` }); // Ajoute un espace avec un id unique
      }
      rows.push(row);
    }
  
    return rows.map((row, rowIndex) => (
      <View key={`row-${rowIndex}`} style={styles.seatRow}>
        {row.map((seat, seatIndex) => {
          if (seat.spacer) {
            return <View key={seat.id} style={styles.spacer} />;
          } else {
            return (
              <TouchableOpacity key={`seat-${seat.seatWagon}-${seat.seatNumber}-${seatIndex}`} style={styles.seatContainer}
                onPress={() => navigation.navigate('Informations complémentaire', { tripTime: trip.trip_time, startLocation: trip.routes.start_location.location_name, endLocation: trip.routes.end_location.location_name, seatWagon: seat.seatWagon, seatNumber: seat.seatNumber, status: seat.status, seatId: seat.seatId, tripId: trip.trip_id })}>
                <MaterialIcons name="event-seat" size={24} color={getSeatColor(seat.status)} />
                <Text style={styles.seatText}>Siège {seat.seatNumber}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    ));
  };
  
  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.header}>
        <Image source={companyLogos[trip.company] || require('../assets/default_logo.png')} style={styles.logo} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Départ: {new Date(trip.trip_time).toLocaleTimeString()}</Text>
          <Text style={styles.infoText}>De: {trip.routes.start_location.location_name} À: {trip.routes.end_location.location_name}</Text>
        </View>
      </View>
      {Object.entries(seatsByWagon).map(([wagon, seats]) => (
        <View key={wagon} style={styles.wagonBlock}>
          <Text style={styles.wagonTitle}>Wagon {wagon}</Text>
          {renderSeatsInWagon(seats)}
        </View>
      ))}
    </ScrollView>
  );
};
export default DetailScreen;