
export interface RecipesData {
    id:          number;
    name:        string;
    img:         string;
    url:         string;
    price:       number;
    title:       string;
    cookingTime: number;
    stock:       number;
    method:      string;
    qty?:        number;
    i?:          number;
    ingredients: Ingredient[];
    comments:    Comment[];
}

export interface Comment {
    id:      number;
    rating:  number;
    comment: string;
    author:  string;
    date:    Date;
}

export interface Ingredient {
    items:    string;
    quantity: number;
    unit:     string;
}
