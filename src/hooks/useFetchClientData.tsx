import { fetchClient } from "@/services/api";
import useClientStore from "@/store/useClientStore";
import { useQuery } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export function useFetchClientData() {
  const { id } = useParams(); // Pega o ID da URL
  const pathname = usePathname(); // returns "/dashboard" on /dashboard?foo=bar
  const setClient = useClientStore((state: any) => state?.setClient);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["clientData", id], // Chave única como array
    queryFn: () => fetchClient(id), // Função de busca
    enabled: !!id, // Apenas executa se o ID existir
    retry: 3, // Tenta 3 vezes em caso de falha
    staleTime: 300000, // Cache de 5 minutos
  });

  useEffect(() => {
    if (data) {
      setClient(data); // Salva no Zustand
    }
  }, [data, setClient]);

  return { data, isLoading, isError, pathname };
}
