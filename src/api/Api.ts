const API_URL = "http://localhost:3000/titulos";

const GET = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Dados recebidos ", data);
        return data;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

export { GET };
