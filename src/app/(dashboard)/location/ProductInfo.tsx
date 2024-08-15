"use client";
import { useEffect } from "react";
import Link from "next/link";

interface ProductInfoProps {
  id: string;
}

export default function ProductInfo({ id }: ProductInfoProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div>
        {" "}
        <h1 className="">404</h1>
      </div>
      <div>
        {" "}
        <h1 className="">Onions</h1>
      </div>

      <div>
        <h1>Nevada Highway</h1>
      </div>
      <div>
        <h1>18:00 GST</h1>
      </div>
    </div>
  );
}
