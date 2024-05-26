import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import { Ionicons } from "@expo/vector-icons";
import { supabase } from '../lib/supabase';
import { ActivityIndicator } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const OtherScreen = ({ navigation }) => {
    const moreItems = [
        { title: 'Profile Utilisateur', action: () => handleNavigation('Profile') },
        { title: 'A propos', action: () => handleNavigation('About') },
        { title: 'RGPD', action: () => handleNavigation('Terms') },
        { title: 'Paramètres', action: () => handleNavigation('Settings') },
        { title: 'Déconnexion', action: () => logout() },
    ];
    const [isLoading, setisLoading] = useState(false);

    const handleNavigation = (item) => {
        Toast.show({ type: 'success', text2: `${item} Coming Soon` });
    };

    function logout() {
        setisLoading(true);
        supabase.auth.signOut();
    }



    if (isLoading) {
        return (
            <ScrollView contentContainerStyle={globalStyles.containerEmpty} contentInsetAdjustmentBehavior="automatic" paddingTop={50}>
                <ActivityIndicator size="large" color="#0000ff" />
            </ScrollView>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="automatic" paddingTop={50}>

            {moreItems.map((item, index) => (
                <TouchableOpacity key={index} onPress={item.action}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.title}</Text>
                        <Ionicons name="arrow-forward" size={20} color="grey" />
                    </View>
                </TouchableOpacity>
            ))}
            <View style={styles.versionContainer}>
                <Ionicons name="information-circle-outline" size={20} color="grey" />
                <Text style={styles.versionText}>App Version : 1.0 @Polytech Nantes</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    versionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        padding: 20,
    },
    versionText: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'right',
    },
    itemContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 16,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        width: '100%',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default OtherScreen;
