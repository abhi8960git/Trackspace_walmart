import Link from "next/link";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  Wallet?: React.ReactNode;
}

export const AppBarTemplate = ({ user, Wallet }: AppbarProps) => {
  return (
    <div className="flex justify-between border-black border-opacity-30 px-4 bg-black p-2 border-b-[1px] ">
      <Link
        href={"/"}
        className="text-lg flex flex-col justify-center font-extrabold text-white"
      >
        TrackSpace
      </Link>
      {Wallet && (
        <div className="flex flex-col justify-center pt-2">{Wallet}</div>
      )}
    </div>
  );
};
