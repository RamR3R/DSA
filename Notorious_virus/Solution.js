function Notoriousvirus(N,arr){
    let maxy = 0;
    let sum = 0;
    for(let i = 0 ; i< N ; i++)
    {
        if(arr[i]>0){
        let out = [];
        let subsum = 0;
        let maxelement = 0;
        for(let j = i ; j< N ;j++)
        {
            subsum+= arr[j];
            if(maxelement<arr[j])
            maxelement = arr[j];
            if(maxy<subsum-maxelement)
            maxy = subsum - maxelement;
        }
        }
    }
    console.log(maxy);
}