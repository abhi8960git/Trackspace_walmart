import { DivIcon } from "leaflet";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LatLngExpression } from "leaflet";

const MapViewer = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <div className="flex flex-col gap-10 w-full h-full">
      <Map posix={[4.79029, -75.69003]} />
      <div className="flex flex-row justify-between">
        <input
          type="number"
          className="input input-bordered"
          placeholder="lattitude"
        />
        <input
          type="number"
          className="input input-bordered"
          placeholder="longitude"
        />
      </div>
    </div>
  );
};

export default MapViewer;
