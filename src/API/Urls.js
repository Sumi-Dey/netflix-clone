import instance from "./BaseUrl";

export const getPopularHome = ()=> instance.get("/movie/popular?api_key=87ad406424c15b5250add79381783609")
export const getUpcommingHome = ()=> instance.get("/movie/upcoming?api_key=87ad406424c15b5250add79381783609")
export const getTopratedHome = ()=> instance.get("/movie/top_rated?api_key=87ad406424c15b5250add79381783609")