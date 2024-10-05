'use client'
// Help: https://andresprieto-25116.medium.com/how-to-use-react-leaflet-in-nextjs-with-typescript-surviving-it-21a3379d4d18
import { cn } from "@/lib/utils";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import '../custom-components/leaflet-map.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngExpression, LatLngTuple } from "leaflet";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
  url?: string;
}

const defaults = {
  zoom: 22,
}

const LeafletMap = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix, url } = Map;
  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: 250, width: 300 }}
      
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posix} draggable={false}>
        <Popup><a href={`https://${url}`} target="_blank">Website</a></Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
