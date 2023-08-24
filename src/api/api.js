import axios from "axios";

const api = {
    fetchSomething: async () => {
        const url = 'https://api.apilayer.com/exchangerates_data/symbols';
        const config = {
            headers: {apikey: "ilIgKghnbwxWDWZPmzHZOdp1hqJF8FM2"},
        };
        return await axios.get(url, config).then((res) => res).catch((err) => console.log(err));
    },

    fetchSymbols: async () => {
        const url = 'https://api.apilayer.com/exchangerates_data/symbols';
        const config = {
            headers: {apikey: "ilIgKghnbwxWDWZPmzHZOdp1hqJF8FM2"},
        }
        return await axios.get(url, config)
            .then((res) => res)
            .catch((err) => console.log(err));
    },

    fetchConvertResult: async (to, from, amount) => {
        const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
        const config = {
            headers: {apikey: "ilIgKghnbwxWDWZPmzHZOdp1hqJF8FM2"},
        }
        return await axios.get(url, config)
            .then((res) => res)
            .catch((err) => console.log(err));
    }
}

export const getSymbols = () => {
    let symbolsArray = [];

    api.fetchSymbols().then((r) => {
        const dataArray = [];
        dataArray.push(r.data.symbols);
        for (let obj of dataArray) {
            Object.keys(obj).forEach((key) => {
                symbolsArray.push(key);
            })
        }
    });

    return symbolsArray;
}

export default api;

//https://v6.exchangerate-api.com/v6/7a9590d9799c0cdfb7a9b8ad/latest/USD
// "apikey: ilIgKghnbwxWDWZPmzHZOdp1hqJF8FM2"