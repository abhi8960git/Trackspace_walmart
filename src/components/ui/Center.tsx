export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center flex-col h-full ">
      <div className="flex justify-center h-full">{children}</div>
    </div>
  );
};
