export const exerciseOptions ={
    
        method: 'GET',
        headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '9df0504671msh6ae1f7644178786p16470ajsnd2e9fbba3a20'
        }
      };
     export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9df0504671msh6ae1f7644178786p16470ajsnd2e9fbba3a20',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };




export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;

}  