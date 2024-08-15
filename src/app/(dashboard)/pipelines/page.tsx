import { Center } from "@/components/ui/Center";

export default function Pipelines() {
  return (
    <div className="bg-base-100 w-full ">
      <Center>
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4 ">
            {/* product type form  */}
            <h1 className="text-xl font-bold">choose product type</h1>
            <select
              name="productType"
              id="1"
              className="select select-text select-bordered select-ghost"
            >
              <option value="Electronics">Electronics</option>
              <option value="ChickenBreast">ChickenBreast</option>
              <option value="Paracetamol">Paracetamol</option>
            </select>

            {/* select batch  */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">
                  input batch id or generate one
                </h1>
                <input
                  type="text"
                  className="input input-ghost input-bordered"
                  placeholder="batch id"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">
                  select source and destination
                </h1>
                <input
                  type="text"
                  className="input input-ghost input-bordered"
                  placeholder="source"
                />
                <input
                  type="text"
                  className="input input-ghost input-bordered"
                  placeholder="destination"
                />
                <button className="btn btn-warning hover:scale-105">
                  create pipeline
                </button>
              </div>
            </div>
          </div>
          <div className="mockup-phone border-secondary">
            <div className="camera"></div>
            <div className="display">
              <ul className="artboard artboard-demo phone-1 px-2 text-sm text-left flex flex-col gap-2 list-outside">
                <li className="list-item">
                  every product is associated with a batch
                </li>
                <li className="list-item">
                  every batch has its own location information and so does the
                  product
                </li>
                <div className="list-item">
                  if the batch location changes, so does the product location
                  associated with that batch but not vice-versa to enable
                  flexibility of changing routes
                </div>
              </ul>
            </div>
          </div>
           
        </div>
      </Center>
    </div>
  );
}
