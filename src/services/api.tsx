const MOCK_FAKE = true;

export async function fetchClient(clientId?: string): Promise<any> {
  try {
    if (MOCK_FAKE) {
      return { name: "Bar do Mexirica", id: 30 };
    }

    const response = await fetch(`https://api.example.com/clients/${clientId}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar o cliente: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    throw error;
  }
}
