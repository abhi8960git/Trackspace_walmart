export interface ProductInfoType {
  id: string;
  type: string;
  source: string;
  dest: string;
  status: "InTransit" | "Delivered" | "Cancelled";
  batchId: string;
  long: number;
  lat: number;
}
