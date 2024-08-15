"use client";

import { ProductInfoType } from "@/types/types";
import { useEffect, useState } from "react";
import { staticProductInfo } from "./staticProducts";
import Map from "@/components/map/Map";

export default function ProductStatus({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  const [productInfo, setProductInfo] =
    useState<ProductInfoType[]>(staticProductInfo);
  const [posix, setPosix] = useState<[number, number]>();

  useEffect(() => {
    try {
      getLatestPosition();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getLatestPosition = async () => {
    try {
      const response = await fetch("/api/product/product1");
      const data = await response.json();
      if (data) {
        console.log(data);
        if (data.latitude && data.longitude)
          setPosix([data.latitude, data.longitude]);
      } else throw new Error("No data found");
    } catch (err) {
      console.log(err);
    }
  };

  if (!productInfo) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="bg-base-100">
      <h1 className="text-2xl font-bold text-center py-2 text-accent">
        Product Status for product id : {productId}
      </h1>
      <div className="w-full h-[500px] py-2">
        {posix ? (
          <Map posix={posix} />
        ) : (
          <h1 className="text-primary hover:scale-110">Loading...</h1>
        )}
      </div>

      <h1 className="text-2xl font-bold text-center">
        Recent Updates for product id : {productId}
      </h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        {productInfo.map((product, index) => (
          <div key={index} className="bg-base-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{product.type}</h2>
            <h2 className="text-xl font-bold">{`from ${product.source}`}</h2>
            <h2 className="text-xl font-bold">{`to ${product.dest}`}</h2>
            <p
              className={`${product.status == "Delivered" ? "text-success" : "text-warning"}`}
            >
              {product.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
