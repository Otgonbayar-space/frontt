import { AllMovies } from "./AllMovies";
import { QueryClient } from "@tanstack/react-query";
import { DramaMovies } from "./DramaMovies";
import { useState } from "react";

export const MovieMain = () => {
  const [dataType, setDataType] = useState<string>("all");

  const changeDataType = (type: string) => {
    setDataType(type);
  };
};
