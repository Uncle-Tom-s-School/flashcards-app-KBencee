import axios from "axios";
import type { KartyaType } from "../types/Kartya";

const api = axios.create({baseURL:""})

export async function getCards() {
    const response = await api.get("cards.json")
    return response.data as KartyaType[]
}
