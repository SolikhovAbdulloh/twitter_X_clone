import Auth from "@/components/auth";
import React from "react";

function Page() {
  let user = false;
  if (!user) {
    return <Auth />;
  }
  return <div>Page</div>;
}

export default Page;
