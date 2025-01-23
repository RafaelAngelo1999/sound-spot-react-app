const MOCK_FAKE = true;

export async function fetchClient(clientId: string): Promise<any> {
  try {
    if (MOCK_FAKE) {
      return { name: "Bar do Mexirica", id: 30 };
    }

    const response = await fetch(`https://api.example.com/clients/${clientId}`);

    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao buscar o cliente: ${response.statusText}`);
    }

    // Retorna os dados do cliente
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    throw error; // Lançando o erro para ser tratado onde a função for chamada
  }
}
