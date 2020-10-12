import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanage-map.css';

import mapMarkerImg from '../images/map-marker.svg';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
                center={[-7.247579,-39.4243953]}
                zoom={17}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagesMap;