import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchUpcomingTripsWithLocations } from '../lib/utils';
import { companyLogos,formatTime,calculateArrivalTime } from '../lib/ressource';
import { useNavigation } from '@react-navigation/native';
import { styles } from "../styles/listScreenStyles";

const ListScreen = () => {
  const [trips, setTrips] = useState([]);
  const [sortedTrips, setSortedTrips] = useState([]);
  const [selectedSort, setSelectedSort] = useState('date');
  const navigation = useNavigation();
  useEffect(() => {
    const getTrips = async () => {
      const upcomingTrips = await fetchUpcomingTripsWithLocations();
      setTrips(upcomingTrips);
      setSortedTrips(upcomingTrips);
    };
    getTrips();
  }, []);
  useEffect(() => sortTrips(selectedSort), [selectedSort, trips]);

  const sortTrips = (sortOption) => {
    const sortedArray = [...trips].sort((a, b) => {
      switch (sortOption) {
        case 'date': return new Date(a.trip_time) - new Date(b.trip_time);
        case 'departureCity': return a.routes.start_location.location_name.localeCompare(b.routes.start_location.location_name);
        case 'arrivalCity': return a.routes.end_location.location_name.localeCompare(b.routes.end_location.location_name);
        default: return 0;
      }
    });
    setSortedTrips(sortedArray);
  };
  
  const renderTrip = ({ item }) => {
    console.log(item)
    const arrivalTime = formatTime(calculateArrivalTime(item.trip_time, "02:00:00"));
    const departureTime = formatTime(new Date(item.trip_time));
    return (
      <TouchableOpacity style={styles.tripContainer} onPress={() => navigation.navigate('Details du trajet', { trip: item })}>
        <View style={styles.textContainer}>
          <Text style={styles.timeText}>Départ: {departureTime}</Text>
          <Text style={styles.timeText}>Arrivée: {arrivalTime}</Text>
          <Text style={styles.detailsText}>Le: {new Date(item.trip_time).toLocaleDateString()}</Text>
          <Text style={styles.detailsText}>De: {item.routes.start_location.location_name} À: {item.routes.end_location.location_name}</Text>
        </View>
        <Image source={companyLogos[item.company]} style={styles.logo} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Trier par :</Text>
        <Picker selectedValue={selectedSort} style={styles.picker} onValueChange={setSelectedSort} dropdownIconColor="#ffffff">
          <Picker.Item label="Date de départ" value="date" />
          <Picker.Item label="Ville de départ" value="departureCity" />
          <Picker.Item label="Ville d'arrivée" value="arrivalCity" />
        </Picker>
      </View>
      <FlatList data={sortedTrips} keyExtractor={(item) => item.trip_id.toString()} renderItem={renderTrip} />
    </View>
  );
};

export default ListScreen;