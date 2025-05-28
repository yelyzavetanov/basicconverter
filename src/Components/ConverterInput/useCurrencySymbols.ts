import { useEffect, useState } from "react";
import api from "../../api/api";

type CurrencySymbol = {
    code: string;
    title: string;
};

export const useCurrencySymbols = () => {
    const [symbols, setSymbols] = useState<CurrencySymbol[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchSymbols = async () => {
            setIsFetching(true);
            try {
                const response: any = await api.fetchSymbols();
                const symbolsArray = Object.entries(response.data.symbols).map(
                    ([code, title]: [string, any]) => ({ code, title })
                );
                setSymbols(symbolsArray);
            } catch (error) {
                console.error("Failed to fetch symbols", error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchSymbols().then(res => res);
    }, []);

    return { symbols, isFetching };
};
