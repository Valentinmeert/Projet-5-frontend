function fetcher(method , url , data , dataType ){
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject){

        request.open(method , url);
        if(dataType !== undefined){
            request.setRequestHeader("Content-type", dataType);
            request.send(JSON.stringify(data));
        }
        else{
            request.send();
        }
        request.onreadystatechange = function(){
            if(request.readyState !== 4) return; 
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
                resolve(JSON.parse(this.responseText));
            }
            else if(this.readyState === XMLHttpRequest.DONE && this.status === 201){
                resolve(JSON.parse(this.response));
            }
            else {
                reject(request.status);
            }
        };
    });
}