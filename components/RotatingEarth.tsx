"use client";

import { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface PointData {
  lat: number;
  lng: number;
  population: number;
  name: string;
}

interface LabelData {
  lat: number;
  lng: number;
  name: string;
  population: number;
}

export default function RotatingEarth() {
  const globeEl = useRef<any>(null);
  const [labelsData, setLabelsData] = useState<LabelData[]>([]);
  const [pointsData, setPointsData] = useState<PointData[]>([]);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ width: 400, height: 400 });
      } else if (width < 768) {
        setDimensions({ width: 450, height: 450 });
      } else if (width < 1024) {
        setDimensions({ width: 500, height: 500 });
      } else {
        setDimensions({ width: 600, height: 600 });
      }
    };

    // Set initial dimensions
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Major cities with population data for sizing
    const cities = [
      { lat: 17.3850, lng: 78.4867, name: "Hyderabad", population: 10000000 },
      { lat: 40.7128, lng: -74.0060, name: "New York", population: 8500000 },
      { lat: 51.5074, lng: -0.1278, name: "London", population: 9000000 },
      { lat: 35.6762, lng: 139.6503, name: "Tokyo", population: 14000000 },
      { lat: -33.8688, lng: 151.2093, name: "Sydney", population: 5300000 },
      { lat: 1.3521, lng: 103.8198, name: "Singapore", population: 5900000 },
      { lat: 19.4326, lng: -99.1332, name: "Mexico City", population: 9200000 },
      { lat: 55.7558, lng: 37.6176, name: "Moscow", population: 12500000 },
      { lat: -1.2921, lng: 36.8219, name: "Nairobi", population: 4400000 },
      { lat: -34.6037, lng: -58.3816, name: "Buenos Aires", population: 3000000 },
      { lat: 37.7749, lng: -122.4194, name: "San Francisco", population: 870000 },
      { lat: 34.0522, lng: -118.2437, name: "Los Angeles", population: 4000000 },
      { lat: 41.8781, lng: -87.6298, name: "Chicago", population: 2700000 },
      { lat: 43.6532, lng: -79.3832, name: "Toronto", population: 2900000 },
      { lat: -23.5505, lng: -46.6333, name: "São Paulo", population: 12300000 },
      { lat: 48.8566, lng: 2.3522, name: "Paris", population: 2200000 },
      { lat: 52.5200, lng: 13.4050, name: "Berlin", population: 3700000 },
      { lat: 41.9028, lng: 12.4964, name: "Rome", population: 2900000 },
      { lat: 40.4168, lng: -3.7038, name: "Madrid", population: 3300000 },
      { lat: 59.9139, lng: 10.7522, name: "Oslo", population: 700000 },
      { lat: 31.2304, lng: 121.4737, name: "Shanghai", population: 24800000 },
      { lat: 39.9042, lng: 116.4074, name: "Beijing", population: 21500000 },
      { lat: 22.3193, lng: 114.1694, name: "Hong Kong", population: 7500000 },
      { lat: 37.5665, lng: 126.9780, name: "Seoul", population: 9700000 },
      { lat: 13.7563, lng: 100.5018, name: "Bangkok", population: 10700000 },
      { lat: 28.6139, lng: 77.2090, name: "New Delhi", population: 32000000 },
      { lat: 19.0760, lng: 72.8777, name: "Mumbai", population: 20400000 },
      { lat: 12.9716, lng: 77.5946, name: "Bangalore", population: 12800000 },
      { lat: 30.0444, lng: 31.2357, name: "Cairo", population: 20900000 },
      { lat: -26.2041, lng: 28.0473, name: "Johannesburg", population: 5600000 },
      { lat: 6.5244, lng: 3.3792, name: "Lagos", population: 15400000 },
      { lat: 25.2048, lng: 55.2708, name: "Dubai", population: 3500000 },
      { lat: -37.8136, lng: 144.9631, name: "Melbourne", population: 5000000 },
      { lat: -6.2088, lng: 106.8456, name: "Jakarta", population: 10600000 },
      { lat: 14.5995, lng: 120.9842, name: "Manila", population: 13900000 },
      // Additional cities
      { lat: 50.4501, lng: 30.5234, name: "Kyiv", population: 3000000 },
      { lat: 59.3293, lng: 18.0686, name: "Stockholm", population: 1600000 },
      { lat: 55.6761, lng: 12.5683, name: "Copenhagen", population: 1400000 },
      { lat: 60.1695, lng: 24.9354, name: "Helsinki", population: 1300000 },
      { lat: 52.2297, lng: 21.0122, name: "Warsaw", population: 1800000 },
      { lat: 50.0755, lng: 14.4378, name: "Prague", population: 1400000 },
      { lat: 47.4979, lng: 19.0402, name: "Budapest", population: 1700000 },
      { lat: 44.4268, lng: 26.1025, name: "Bucharest", population: 1800000 },
      { lat: 38.7223, lng: -9.1393, name: "Lisbon", population: 3000000 },
      { lat: 53.3498, lng: -6.2603, name: "Dublin", population: 1400000 },
      { lat: 45.4642, lng: 9.1900, name: "Milan", population: 3200000 },
      { lat: 47.3769, lng: 8.5417, name: "Zurich", population: 1400000 },
      { lat: 48.2082, lng: 16.3738, name: "Vienna", population: 2000000 },
      { lat: 50.8503, lng: 4.3517, name: "Brussels", population: 2100000 },
      { lat: 52.3667, lng: 4.8945, name: "Amsterdam", population: 1200000 },
      { lat: 33.8688, lng: 35.5095, name: "Beirut", population: 2400000 },
      { lat: 35.6892, lng: 51.3890, name: "Tehran", population: 9000000 },
      { lat: 41.0082, lng: 28.9784, name: "Istanbul", population: 15500000 },
      { lat: 39.9334, lng: 32.8597, name: "Ankara", population: 5700000 },
      { lat: 31.7683, lng: 35.2137, name: "Jerusalem", population: 900000 },
      { lat: 24.7136, lng: 46.6753, name: "Riyadh", population: 7700000 },
      { lat: 24.4539, lng: 54.3773, name: "Abu Dhabi", population: 1500000 },
      { lat: 25.0657, lng: -77.3439, name: "Nassau", population: 280000 },
      { lat: 23.1136, lng: -82.3666, name: "Havana", population: 2100000 },
      { lat: 18.4861, lng: -69.9312, name: "Santo Domingo", population: 3300000 },
      { lat: 4.7110, lng: -74.0721, name: "Bogotá", population: 11000000 },
      { lat: -12.0464, lng: -77.0428, name: "Lima", population: 10800000 },
      { lat: -16.5000, lng: -68.1500, name: "La Paz", population: 2900000 },
      { lat: -33.4489, lng: -70.6693, name: "Santiago", population: 6800000 },
      { lat: -34.9011, lng: -56.1645, name: "Montevideo", population: 1400000 },
      { lat: -15.7942, lng: -47.8825, name: "Brasília", population: 4800000 },
      { lat: -22.9068, lng: -43.1729, name: "Rio de Janeiro", population: 6700000 },
      { lat: 10.4806, lng: -66.9036, name: "Caracas", population: 2900000 },
      { lat: 9.9281, lng: -84.0907, name: "San José", population: 2200000 },
      { lat: 21.1619, lng: -86.8515, name: "Cancún", population: 900000 },
      { lat: 45.4215, lng: -75.6972, name: "Ottawa", population: 1400000 },
      { lat: 49.2827, lng: -123.1207, name: "Vancouver", population: 2600000 },
      { lat: 51.0447, lng: -114.0719, name: "Calgary", population: 1500000 },
      { lat: 53.5461, lng: -113.4938, name: "Edmonton", population: 1400000 },
      { lat: 45.5017, lng: -73.5673, name: "Montreal", population: 4200000 },
      { lat: -41.2865, lng: 174.7762, name: "Wellington", population: 420000 },
      { lat: -36.8485, lng: 174.7633, name: "Auckland", population: 1700000 },
      { lat: -17.8249, lng: 31.0335, name: "Harare", population: 2100000 },
      { lat: -15.4167, lng: 28.2833, name: "Lusaka", population: 2700000 },
      { lat: 0.3476, lng: 32.5825, name: "Kampala", population: 3600000 },
      { lat: -4.0435, lng: 39.6682, name: "Mombasa", population: 1200000 },
      { lat: 36.8065, lng: 10.1815, name: "Tunis", population: 2700000 },
      { lat: 33.5138, lng: 36.2765, name: "Damascus", population: 2500000 },
      { lat: 33.3152, lng: 44.3661, name: "Baghdad", population: 8100000 },
      { lat: 29.3759, lng: 47.9774, name: "Kuwait City", population: 4500000 },
      { lat: 26.0667, lng: 50.5577, name: "Manama", population: 700000 },
      { lat: 25.2854, lng: 51.5310, name: "Doha", population: 2400000 },
      { lat: 23.8859, lng: 45.0792, name: "Medina", population: 1500000 },
      { lat: 21.4225, lng: 39.8262, name: "Mecca", population: 2000000 },
      // Additional cities - Asia Pacific
      { lat: 22.5726, lng: 88.3639, name: "Kolkata", population: 14800000 },
      { lat: 23.8103, lng: 90.4125, name: "Dhaka", population: 21700000 },
      { lat: 33.6844, lng: 73.0479, name: "Islamabad", population: 2000000 },
      { lat: 24.8607, lng: 67.0011, name: "Karachi", population: 16000000 },
      { lat: 31.5497, lng: 74.3436, name: "Lahore", population: 13000000 },
      { lat: 27.7172, lng: 85.3240, name: "Kathmandu", population: 1500000 },
      { lat: 34.5553, lng: 69.2075, name: "Kabul", population: 4600000 },
      { lat: 39.6270, lng: 66.9750, name: "Samarkand", population: 550000 },
      { lat: 41.2995, lng: 69.2401, name: "Tashkent", population: 2700000 },
      { lat: 43.2380, lng: 76.9457, name: "Almaty", population: 2000000 },
      { lat: 51.1694, lng: 71.4491, name: "Nur-Sultan", population: 1200000 },
      { lat: 47.9105, lng: 106.9057, name: "Ulaanbaatar", population: 1600000 },
      { lat: 11.5564, lng: 104.9282, name: "Phnom Penh", population: 2200000 },
      { lat: 17.9757, lng: 102.6331, name: "Vientiane", population: 950000 },
      { lat: 16.8409, lng: 96.1735, name: "Yangon", population: 5200000 },
      { lat: 21.0285, lng: 105.8542, name: "Hanoi", population: 8000000 },
      { lat: 10.8231, lng: 106.6297, name: "Ho Chi Minh City", population: 9000000 },
      { lat: 3.1390, lng: 101.6869, name: "Kuala Lumpur", population: 8400000 },
      { lat: 4.9031, lng: 114.9398, name: "Bandar Seri Begawan", population: 100000 },
      { lat: -8.6500, lng: 115.2167, name: "Denpasar", population: 900000 },
      { lat: -5.1477, lng: 119.4327, name: "Makassar", population: 1500000 },
      { lat: -7.7956, lng: 110.3695, name: "Yogyakarta", population: 420000 },
      { lat: -0.7893, lng: 113.9213, name: "Palangkaraya", population: 260000 },
      { lat: -31.9505, lng: 115.8605, name: "Perth", population: 2100000 },
      { lat: -27.4698, lng: 153.0251, name: "Brisbane", population: 2600000 },
      { lat: -34.9285, lng: 138.6007, name: "Adelaide", population: 1400000 },
      { lat: -42.8821, lng: 147.3272, name: "Hobart", population: 250000 },
      { lat: -43.5321, lng: 172.6362, name: "Christchurch", population: 400000 },
      { lat: -9.4438, lng: 147.1803, name: "Port Moresby", population: 400000 },
      { lat: -18.1416, lng: 178.4419, name: "Suva", population: 200000 },
      { lat: 13.4443, lng: 144.7937, name: "Hagåtña", population: 150000 },
      { lat: 21.3099, lng: -157.8581, name: "Honolulu", population: 350000 },
      // Additional cities - Europe
      { lat: 64.1466, lng: -21.9426, name: "Reykjavik", population: 130000 },
      { lat: 55.9533, lng: -3.1883, name: "Edinburgh", population: 540000 },
      { lat: 54.5973, lng: -5.9301, name: "Belfast", population: 340000 },
      { lat: 51.4545, lng: -2.5879, name: "Bristol", population: 470000 },
      { lat: 53.4808, lng: -2.2426, name: "Manchester", population: 550000 },
      { lat: 52.4862, lng: -1.8904, name: "Birmingham", population: 1100000 },
      { lat: 57.1497, lng: -2.0943, name: "Aberdeen", population: 200000 },
      { lat: 43.2965, lng: 5.3698, name: "Marseille", population: 870000 },
      { lat: 45.7640, lng: 4.8357, name: "Lyon", population: 520000 },
      { lat: 43.6047, lng: 1.4442, name: "Toulouse", population: 490000 },
      { lat: 47.2184, lng: -1.5536, name: "Nantes", population: 320000 },
      { lat: 50.6292, lng: 3.0573, name: "Lille", population: 230000 },
      { lat: 43.3000, lng: -0.3667, name: "Pau", population: 80000 },
      { lat: 46.1605, lng: -1.1511, name: "La Rochelle", population: 80000 },
      { lat: 49.4431, lng: 1.0993, name: "Rouen", population: 110000 },
      { lat: 48.5734, lng: 7.7521, name: "Strasbourg", population: 280000 },
      { lat: 53.5511, lng: 9.9937, name: "Hamburg", population: 1900000 },
      { lat: 48.1351, lng: 11.5820, name: "Munich", population: 1500000 },
      { lat: 50.9375, lng: 6.9603, name: "Cologne", population: 1100000 },
      { lat: 51.0504, lng: 13.7373, name: "Dresden", population: 560000 },
      { lat: 51.3397, lng: 12.3731, name: "Leipzig", population: 600000 },
      { lat: 49.0069, lng: 8.4037, name: "Karlsruhe", population: 310000 },
      { lat: 48.7775, lng: 9.1800, name: "Stuttgart", population: 630000 },
      { lat: 51.4556, lng: 7.0116, name: "Essen", population: 580000 },
      { lat: 45.0703, lng: 7.6869, name: "Turin", population: 870000 },
      { lat: 40.8518, lng: 14.2681, name: "Naples", population: 960000 },
      { lat: 38.1157, lng: 13.3615, name: "Palermo", population: 660000 },
      { lat: 45.4064, lng: 11.8768, name: "Venice", population: 260000 },
      { lat: 43.7696, lng: 11.2558, name: "Florence", population: 380000 },
      { lat: 44.4949, lng: 11.3426, name: "Bologna", population: 390000 },
      { lat: 45.5846, lng: 9.2744, name: "Monza", population: 120000 },
      { lat: 37.9838, lng: 23.7275, name: "Athens", population: 3200000 },
      { lat: 40.6401, lng: 22.9444, name: "Thessaloniki", population: 1100000 },
      { lat: 35.3387, lng: 25.1442, name: "Heraklion", population: 180000 },
      { lat: 42.6977, lng: 23.3219, name: "Sofia", population: 1300000 },
      { lat: 44.4325, lng: 26.1039, name: "Bucharest", population: 1800000 },
      { lat: 46.7712, lng: 23.6236, name: "Cluj-Napoca", population: 320000 },
      { lat: 44.1598, lng: 28.6348, name: "Constanța", population: 280000 },
      { lat: 45.7494, lng: 21.2272, name: "Timișoara", population: 320000 },
      { lat: 44.8176, lng: 20.4633, name: "Belgrade", population: 1400000 },
      { lat: 45.8150, lng: 15.9819, name: "Zagreb", population: 800000 },
      { lat: 43.8563, lng: 18.4131, name: "Sarajevo", population: 420000 },
      { lat: 42.4304, lng: 19.2594, name: "Podgorica", population: 200000 },
      { lat: 41.3275, lng: 19.8187, name: "Tirana", population: 500000 },
      { lat: 42.0094, lng: 21.4361, name: "Skopje", population: 600000 },
      { lat: 46.0569, lng: 14.5058, name: "Ljubljana", population: 300000 },
      { lat: 47.0707, lng: 15.4395, name: "Graz", population: 300000 },
      { lat: 47.8095, lng: 13.0550, name: "Salzburg", population: 160000 },
      { lat: 46.9481, lng: 7.4474, name: "Bern", population: 140000 },
      { lat: 46.2044, lng: 6.1432, name: "Geneva", population: 200000 },
      { lat: 47.5596, lng: 7.5886, name: "Basel", population: 180000 },
      { lat: 46.5197, lng: 6.6323, name: "Lausanne", population: 140000 },
      // Additional cities - Americas
      { lat: 61.2181, lng: -149.9003, name: "Anchorage", population: 290000 },
      { lat: 47.6062, lng: -122.3321, name: "Seattle", population: 750000 },
      { lat: 45.5152, lng: -122.6784, name: "Portland", population: 650000 },
      { lat: 38.5816, lng: -121.4944, name: "Sacramento", population: 530000 },
      { lat: 37.3382, lng: -121.8863, name: "San Jose", population: 1000000 },
      { lat: 36.7783, lng: -119.4179, name: "Fresno", population: 540000 },
      { lat: 33.4484, lng: -112.0740, name: "Phoenix", population: 1700000 },
      { lat: 32.7157, lng: -117.1611, name: "San Diego", population: 1400000 },
      { lat: 36.1699, lng: -115.1398, name: "Las Vegas", population: 650000 },
      { lat: 40.7608, lng: -111.8910, name: "Salt Lake City", population: 200000 },
      { lat: 39.7392, lng: -104.9903, name: "Denver", population: 720000 },
      { lat: 35.2271, lng: -80.8431, name: "Charlotte", population: 870000 },
      { lat: 33.7490, lng: -84.3880, name: "Atlanta", population: 500000 },
      { lat: 25.7617, lng: -80.1918, name: "Miami", population: 470000 },
      { lat: 27.9506, lng: -82.4572, name: "Tampa", population: 400000 },
      { lat: 28.5383, lng: -81.3792, name: "Orlando", population: 310000 },
      { lat: 32.7765, lng: -96.7970, name: "Dallas", population: 1300000 },
      { lat: 29.7604, lng: -95.3698, name: "Houston", population: 2300000 },
      { lat: 30.2672, lng: -97.7431, name: "Austin", population: 980000 },
      { lat: 29.4241, lng: -98.4936, name: "San Antonio", population: 1550000 },
      { lat: 35.1495, lng: -90.0490, name: "Memphis", population: 650000 },
      { lat: 36.1627, lng: -86.7816, name: "Nashville", population: 700000 },
      { lat: 38.2527, lng: -85.7585, name: "Louisville", population: 620000 },
      { lat: 39.0997, lng: -94.5786, name: "Kansas City", population: 500000 },
      { lat: 38.6270, lng: -90.1994, name: "St. Louis", population: 300000 },
      { lat: 41.2565, lng: -95.9345, name: "Omaha", population: 480000 },
      { lat: 44.9778, lng: -93.2650, name: "Minneapolis", population: 430000 },
      { lat: 43.0389, lng: -87.9065, name: "Milwaukee", population: 590000 },
      { lat: 42.3601, lng: -71.0589, name: "Boston", population: 700000 },
      { lat: 39.7392, lng: -75.5398, name: "Newark", population: 280000 },
      { lat: 39.9526, lng: -75.1652, name: "Philadelphia", population: 1600000 },
      { lat: 40.4406, lng: -79.9959, name: "Pittsburgh", population: 300000 },
      { lat: 39.2904, lng: -76.6122, name: "Baltimore", population: 590000 },
      { lat: 38.9072, lng: -77.0369, name: "Washington D.C.", population: 710000 },
      { lat: 37.5407, lng: -77.4360, name: "Richmond", population: 230000 },
      { lat: 35.7796, lng: -78.6382, name: "Raleigh", population: 480000 },
      { lat: 41.7658, lng: -72.6734, name: "Hartford", population: 120000 },
      { lat: 42.8864, lng: -78.8784, name: "Buffalo", population: 260000 },
      { lat: 43.1610, lng: -77.6109, name: "Rochester", population: 210000 },
      { lat: 42.6526, lng: -73.7562, name: "Albany", population: 100000 },
      { lat: 32.3182, lng: -64.7675, name: "Hamilton", population: 65000 },
      { lat: 17.9712, lng: -76.7936, name: "Kingston", population: 1200000 },
      { lat: 25.0343, lng: -77.3963, name: "Nassau", population: 280000 },
      { lat: 13.1939, lng: -59.5432, name: "Bridgetown", population: 110000 },
      { lat: 10.6549, lng: -61.5019, name: "Port of Spain", population: 40000 },
      { lat: 6.8013, lng: -58.1551, name: "Georgetown", population: 240000 },
      { lat: 5.8520, lng: -55.2038, name: "Paramaribo", population: 240000 },
      { lat: 3.4372, lng: -76.5225, name: "Cali", population: 2200000 },
      { lat: 6.2442, lng: -75.5812, name: "Medellín", population: 2500000 },
      { lat: 10.9685, lng: -74.7813, name: "Barranquilla", population: 1200000 },
      { lat: 10.3910, lng: -75.4794, name: "Cartagena", population: 1000000 },
      { lat: -0.2298, lng: -78.5249, name: "Quito", population: 2800000 },
      { lat: -2.1962, lng: -79.8862, name: "Guayaquil", population: 2700000 },
      { lat: -13.5319, lng: -71.9675, name: "Cusco", population: 430000 },
      { lat: -3.7437, lng: -38.5434, name: "Fortaleza", population: 2700000 },
      { lat: -8.0476, lng: -34.8770, name: "Recife", population: 1700000 },
      { lat: -12.9777, lng: -38.5016, name: "Salvador", population: 2900000 },
      { lat: -19.9245, lng: -43.9352, name: "Belo Horizonte", population: 2500000 },
      { lat: -25.4284, lng: -49.2733, name: "Curitiba", population: 1900000 },
      { lat: -30.0277, lng: -51.2287, name: "Porto Alegre", population: 1500000 },
      { lat: -3.1190, lng: -60.0217, name: "Manaus", population: 2200000 },
      { lat: -1.4558, lng: -48.4902, name: "Belém", population: 1500000 },
      { lat: -27.5949, lng: -48.5482, name: "Florianópolis", population: 510000 },
      { lat: 0.0636, lng: -51.0513, name: "Macapá", population: 510000 },
      { lat: -20.3155, lng: -40.3128, name: "Vitória", population: 370000 },
      { lat: -25.4372, lng: -54.5878, name: "Ciudad del Este", population: 320000 },
      { lat: -31.4167, lng: -64.1833, name: "Córdoba", population: 1400000 },
      { lat: -32.9468, lng: -60.6393, name: "Rosario", population: 1300000 },
      { lat: -38.7167, lng: -62.2667, name: "Bahía Blanca", population: 300000 },
      { lat: -31.6333, lng: -60.7000, name: "Santa Fe", population: 400000 },
      { lat: -32.8895, lng: -68.8458, name: "Mendoza", population: 1100000 },
      { lat: -51.6230, lng: -69.2168, name: "Río Gallegos", population: 100000 },
      { lat: -54.8019, lng: -68.3030, name: "Ushuaia", population: 75000 },
      { lat: -53.1638, lng: -70.9171, name: "Punta Arenas", population: 130000 },
      { lat: -29.1534, lng: -51.1797, name: "Caxias do Sul", population: 520000 },
      { lat: -45.8757, lng: -67.4863, name: "Comodoro Rivadavia", population: 180000 },
      // Additional cities - Africa
      { lat: 9.0579, lng: 7.4951, name: "Abuja", population: 3600000 },
      { lat: 12.1348, lng: 15.0557, name: "N'Djamena", population: 1600000 },
      { lat: 13.5127, lng: 2.1126, name: "Niamey", population: 1300000 },
      { lat: 12.3714, lng: 1.5197, name: "Ouagadougou", population: 2500000 },
      { lat: 9.3077, lng: 2.3158, name: "Porto-Novo", population: 300000 },
      { lat: 6.3703, lng: 2.3912, name: "Cotonou", population: 780000 },
      { lat: 6.1256, lng: 1.2254, name: "Lomé", population: 1700000 },
      { lat: 5.5600, lng: -0.1969, name: "Accra", population: 2500000 },
      { lat: 6.6018, lng: -1.6163, name: "Kumasi", population: 3300000 },
      { lat: 7.9465, lng: -1.0232, name: "Abidjan", population: 5400000 },
      { lat: 12.6392, lng: -8.0029, name: "Bamako", population: 2700000 },
      { lat: 14.7167, lng: -17.4677, name: "Dakar", population: 3100000 },
      { lat: 11.8659, lng: -15.5984, name: "Bissau", population: 590000 },
      { lat: 6.8158, lng: -5.2776, name: "Yamoussoukro", population: 360000 },
      { lat: 8.4800, lng: -13.2299, name: "Freetown", population: 1200000 },
      { lat: 6.3156, lng: -10.8074, name: "Monrovia", population: 1600000 },
      { lat: 4.3750, lng: 18.5581, name: "Bangui", population: 890000 },
      { lat: 3.8480, lng: 11.5021, name: "Yaoundé", population: 4100000 },
      { lat: 4.0511, lng: 9.7679, name: "Douala", population: 3700000 },
      { lat: 0.5143, lng: 25.1969, name: "Mbandaka", population: 350000 },
      { lat: -4.3217, lng: 15.3139, name: "Kinshasa", population: 14600000 },
      { lat: -11.6696, lng: 27.4790, name: "Lubumbashi", population: 2600000 },
      { lat: -1.6792, lng: 29.2228, name: "Goma", population: 2000000 },
      { lat: -1.9500, lng: 30.0588, name: "Kigali", population: 1200000 },
      { lat: -3.3731, lng: 29.3599, name: "Bujumbura", population: 1200000 },
      { lat: -6.1659, lng: 39.2026, name: "Dar es Salaam", population: 6700000 },
      { lat: -3.3869, lng: 36.6830, name: "Arusha", population: 540000 },
      { lat: -9.4456, lng: 159.9729, name: "Honiara", population: 95000 },
      { lat: -18.1248, lng: 35.5562, name: "Quelimane", population: 350000 },
      { lat: -19.8436, lng: 34.8389, name: "Beira", population: 530000 },
      { lat: -25.9655, lng: 32.5832, name: "Maputo", population: 1100000 },
      { lat: -29.8587, lng: 31.0218, name: "Durban", population: 3800000 },
      { lat: -33.9249, lng: 18.4241, name: "Cape Town", population: 4600000 },
      { lat: -33.9608, lng: 25.6022, name: "Port Elizabeth", population: 1200000 },
      { lat: -24.6541, lng: 25.9087, name: "Gaborone", population: 270000 },
      { lat: -22.5597, lng: 17.0832, name: "Windhoek", population: 450000 },
      { lat: -19.4154, lng: 23.5089, name: "Maun", population: 85000 },
      { lat: -15.7869, lng: 35.0056, name: "Lilongwe", population: 1100000 },
      { lat: -13.9626, lng: 33.7741, name: "Blantyre", population: 1100000 },
      { lat: -18.9201, lng: 47.5237, name: "Antananarivo", population: 3400000 },
      { lat: -12.7809, lng: 45.2279, name: "Moroni", population: 70000 },
      { lat: -20.1609, lng: 57.4989, name: "Port Louis", population: 150000 },
      { lat: -4.6167, lng: 55.4500, name: "Victoria", population: 30000 },
      { lat: 15.3547, lng: 44.2067, name: "Sana'a", population: 3900000 },
      { lat: 12.8000, lng: 45.0333, name: "Aden", population: 860000 },
      { lat: 21.5169, lng: 39.2192, name: "Jeddah", population: 4700000 }
    ];
    
    setLabelsData(cities);
    setPointsData(cities);

    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
      
      // Disable user controls for a cleaner look
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
      
      // Set initial position
      globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2 });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundColor: '#fcfcfd' }}>
      <div className="w-full max-w-[600px] h-full max-h-[600px]">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundColor="#fcfcfd"
          showGlobe={true}
          showAtmosphere={true}
          atmosphereColor="#60a5fa"
          atmosphereAltitude={0.15}
          pointsData={pointsData}
          pointLat={(d: any) => d.lat}
          pointLng={(d: any) => d.lng}
          pointColor={(d: any) => {
            const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1'];
            return colors[Math.floor(d.population / 3000000) % colors.length];
          }}
          pointAltitude={(d: any) => Math.min(Math.sqrt(d.population) * 0.00008 + 0.05, 0.25)}
          pointRadius={(d: any) => Math.sqrt(d.population) * 0.0002 + 0.5}
          labelsData={labelsData}
          labelLat={(d: any) => d.lat}
          labelLng={(d: any) => d.lng}
          labelText={(d: any) => d.name}
          labelSize={(d: any) => Math.sqrt(d.population) * 2e-4}
          labelDotRadius={0}
          labelColor={() => 'rgba(37, 99, 235, 0.9)'}
          labelResolution={2}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
    </div>
  );
}