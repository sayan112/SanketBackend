const BinearySearch=(arr,serchingelem)=>{
     let high = arr.length-1;
     let low =0;
      while(low <= high)
      {
        let mid= low + Math.floor((high - low) / 2);
         if(arr[mid]==serchingelem)
         {
            return mid;
         }
         else if(arr[mid]>serchingelem)
         {
            high=mid-1;
         }
         else{
             low=mid+1;
         }
      }
       return "not found";

}
 const linerSearch = (arr, serchingelem) => {
    for(let i=0; i<arr.length; i++){
        if(serchingelem==arr[i])
        {
             return i;
        }
    }
       return "not found";
 };

module.exports = {linerSearch,BinearySearch};