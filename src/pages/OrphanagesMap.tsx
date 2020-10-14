import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import '../styles/pages/orphanage-map.css';

import mapMarkerImg from '../images/map-marker.svg';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import leaflet, { popup } from 'leaflet';

const mapIcon = leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [48, 58],
    iconAnchor: [29, 68]
});

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Crato</strong>
                    <span>Ceará</span>
                </footer>
            </aside>

            <Map 
                center={[-7.2500766,-39.4238129]}
                zoom={17}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker
                position={[-7.2500766, -39.4238129]}
                icon={mapIcon}>
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">Brenin
                    <Link to="/Orphanage/:id"><FiArrowRight size={32} color="#fff" /></Link>
                    </Popup>
                </Marker>

                
            </Map>

            <Link to="/CreateOrphanage" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagesMap;