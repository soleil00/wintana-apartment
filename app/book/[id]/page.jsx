"use client";

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  return <div className="mt-[65px]">here is your prams : {params.id}</div>;
};

export default Page;
