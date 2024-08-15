import { Center } from "@/components/ui/Center";
import ProductInfo from "./ProductInfo";

const Location = () => {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="bg-base-100 w-full ">
      <Center>
        <div className="grid grid-cols-2 gap-10 w-full mx-20 h-full items-center">
          {/* first colum */}
          <div className="col-span-1 flex flex-col gap-2 hover:scale-105 transition-all duration-300">
            <button className="btn btn-outline border-neutral md:w-72  mx-auto ">
               get location
            </button>
            <button className="btn btn-success md:w-72 mx-auto ">
               get location
            </button>
          </div>

          {/* second column */}
          <div className="col-span-1 flex flex-col gap-2 h-full md:py-20 ">
            <div className="h-full border-neutral/40 rounded-md w-full border-2 overflow-y-scroll max-h-[30rem] my-auto">
              {items &&
                items.map((item) => (
                  <div key={item}>
                    <ProductInfo key={item} id={item.toString()} />
                    <hr className="" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Location;
