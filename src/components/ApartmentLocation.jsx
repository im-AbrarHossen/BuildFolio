import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ApartmentLocation = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-2xl font-bold mb-5'>Apartment Location</h1>
            <MapContainer
                center={[23.7568, 90.4255]} // Updated coordinates for Goran, Khilgaon, Dhaka
                zoom={15}
                style={{ height: '400px', width: '91%', margin: '0 auto', borderRadius: '8px', zIndex: 0 }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[23.7568, 90.4255]}>
                    <Popup>Goran, Khilgaon, Dhaka</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default ApartmentLocation;