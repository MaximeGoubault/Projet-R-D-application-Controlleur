import { supabase } from "./supabase";
import {
  Button,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Switch,
  Platform,
} from "react-native";

export const fetchUpcomingTripsWithLocations = async () => {
    const now = new Date().toISOString();
  
    let { data: trips, error } = await supabase
      .from('trips')
      .select(`
        *,
        routes (
          start_location_id,
          end_location_id,
          start_location:locations!routes_start_location_id_fkey (location_name),
          end_location:locations!routes_end_location_id_fkey (location_name)
        )
      `)
      .gte('trip_time', now)
      .order('trip_time', { ascending: true });
  
    if (error) {
      console.error('Error fetching upcoming trips with locations:', error);
      return [];
    }
  
    return trips;
  };

  export const fetchSeatsForTrip = async (trainId, tripId) => {
    // Assurez-vous que tripId est correctement inséré dans la requête
    let query = `
        seat_id,
        train_id,
        seat_number,
        wagon,
        ${tripId}
    `;

    let { data: seats, error } = await supabase
      .from('seats')
      .select(query)
      .eq('train_id', trainId);

    if (error) {
      console.error('Error fetching seats for trip:', error);
      return [];
    }

    return seats;
};


  const calculateArrivalTime = (departureTime, durationInMinutes) => {
    const departureDate = new Date(departureTime);
    const arrivalDate = new Date(departureDate.getTime() + durationInMinutes * 60000); // Convertit la durée en millisecondes
    return arrivalDate;
  };
  export const fetchTicketInfo = async (seatId, tripId) => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .eq('seat_id', seatId)
        .eq('trip_id', tripId)
        .single();
  
      if (error) {
        return null;
      }
      console.log(data)
      return data;
    } catch (error) {
      console.error('Exception lors de la récupération des informations du ticket:', error);
      return null;
    }
  };


  export const fetchUserProfile = async (userId) => {

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        console.log(data)
        return data;
  }
  