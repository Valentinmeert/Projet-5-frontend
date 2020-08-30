function fetcher(method , url , data , dataType ){
    return new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
        request.open(method , url);
        if(dataType !== undefined){
            request.setRequestHeader("Content-type", dataType);
            request.send(JSON.stringify(data));
        }
        else{
            request.send();
        }
        request.onreadystatechange = function(){
            if(this.readyState !== XMLHttpRequest.DONE) return; 
            if( this.status === 200 ||
                this.status === 201){
                resolve(JSON.parse(this.responseText));
            }
            else {
                reject(this.status);
            }
        };
    });
}