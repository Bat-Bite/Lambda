const mayusculas = async(event) => {
    
    let miPalabra = event.word.toUpperCase();
    const response = {
        statusCode: 200,
        body: JSON.stringify(miPalabra),
    };
    return response;
};

export const handler = mayusculas;