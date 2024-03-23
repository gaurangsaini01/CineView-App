const useGenre = (selectedGenre) =>{
    if(selectedGenre.length<1){
        return "";
    }
    const genreIds = selectedGenre.map((g)=>g.id);
    return genreIds.reduce((acc,curr)=>acc+','+curr);
}
export default useGenre