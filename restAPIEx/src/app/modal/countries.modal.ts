export interface currenciesObj{
    symbol : string;
};

export interface Country{
    name : string;
    capital : string;
    population : number;
    nativeName : string;
    currencies : currenciesObj[]
};