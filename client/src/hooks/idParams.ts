import { useParams } from "react-router-dom";

export const useIDParams = () => {
  const { id } = useParams<{ id: string }>();
  return +id;
};
