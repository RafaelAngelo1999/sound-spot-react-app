import { fetchClient } from "@/services/api";
import useClientStore from "@/store/useClientStore";
import { useQuery } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export function useFetchClientData() {
  const { id } = useParams();
  const pathname = usePathname();
  const setClient = useClientStore((state: any) => state?.setClient);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["clientData", id],
    queryFn: () => fetchClient(id as string),
    enabled: !!id,
    retry: 3,
    staleTime: 300000,
  });

  useEffect(() => {
    if (data) {
      setClient(data);
    }
  }, [data, setClient]);

  return { data, isLoading, isError, pathname };
}
