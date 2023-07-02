import ListRowProps from "../types/ListRowProps";

const API_URL = "http://localhost:3000/titulos";

const GET_ALL = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Dados recebidos ", data);
        return data;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

const POST_TITLE = async (titleData: ListRowProps) => {
    try {  
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(titleData)
      });
  
      if (response.ok) {
        console.log("Título adicionado com sucesso!");
      } else {
        console.log("Erro ao adicionar título:", response.status);
        console.log(titleData);
      }
    } catch (error) {
      console.log("API ERRO:", error);
    }
  };
  
  export { GET_ALL, POST_TITLE };