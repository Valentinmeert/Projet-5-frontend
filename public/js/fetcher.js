function fetcher(method , url , callBack , data , dataType ) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = callBack;
    request.open(method , url);
    if(dataType !== null){
        request.setRequestHeader("Content-type", dataType);
    }
    if(data !== null){
        request.send(JSON.stringify(data));
    }
    else{
        request.send();
    }
}