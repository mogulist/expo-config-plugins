import { NaverMapView, type Region } from "@mj-studio/react-native-naver-map";
import React from "react";

export default function map() {
  const jejuRegion: Region = {
    latitude: 33.20530773,
    longitude: 126.14656715029,
    latitudeDelta: 0.38,
    longitudeDelta: 0.8,
  };
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };

  return (
    <NaverMapView
      style={{ flex: 1 }}
      // showsMyLocationButton={true}
      onTapMap={(params) => console.log("onTouch", JSON.stringify(params))}
      onCameraChanged={(e) => console.log("onCameraChange", JSON.stringify(e))}
      initialRegion={{
        latitude: 33.20530773,
        longitude: 126.14656715029,
        latitudeDelta: 0.38,
        longitudeDelta: 0.8,
      }}
      mapType="Basic"
    ></NaverMapView>
  );
}
