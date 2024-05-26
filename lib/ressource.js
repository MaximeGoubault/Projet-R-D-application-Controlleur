export const companyLogos = {
    "SNCF": require('../assets/SNCF.png'),
  };

export const calculateArrivalTime = (departureTime, durationString) => {
    const [hours, minutes] = durationString.split(':').map(Number);
    return new Date(new Date(departureTime).getTime() + (hours * 60 + minutes) * 60000);
  };

export const formatTime = (date) => `${date.getHours()}h${date.getMinutes().toString().padStart(2, '0')}`;
