import MapViewer from "./MapViewer";

export default async function Page() {
  return (
    <div className="w-full h-full bg-base-100 min-h-screen px-10">
      <h1 className="text-2xl mx-auto font-semibold uppercase my-auto ">
        select transaction to view on map
      </h1>
      <div className="bg-white-700 rounded-md overflow-hidden my-5 w-[98%] h-[480px] ">
        <MapViewer />
      </div>
    </div>
  );
}
