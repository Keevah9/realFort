import axios from "axios";

export const baseUrl = "https://zoopla.p.rapidapi.com";



// headers: {
//     'X-RapidAPI-Key': '340423852dmsh85a53752e64d615p16bb87jsna98a2ab2e593',
//     'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
//   }

export const fetchApi = async (url)=>{
    const { data } = await axios.get(url, {
      //     headers: {
      // 'X-RapidAPI-Key': '340423852dmsh85a53752e64d615p16bb87jsna98a2ab2e593',
      // 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      //     }

      headers: {
        "X-RapidAPI-Key": "3644d631f5msh53cd727592ffe57p19d87bjsne8b6e2829317",
        "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
      },
    });
    return data
}