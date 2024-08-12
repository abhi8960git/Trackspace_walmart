"use client";
import { AppBarTemplate } from "./AppBarTemplate";

export function AppBar() {
  const user = {
    name: "John Doe",
  };

  return (
    <div className="">
      <AppBarTemplate user={user} />
    </div>
  );
}
