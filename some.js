function stringChallenge(sen){

    var maxCnt=0;
    var maxString='';
    var cnt=0;
    var string = '';
    sen=sen+' ';
    for(var i=0;i<sen.length;i++)
    {
        if(sen[i]==' ')
        {
            if(maxCnt < cnt)
            {
                maxCnt=Math.max(cnt,maxCnt);
                maxString=string;
            }
            string='';
            cnt=0;
        }
        else if((sen[i]>='a'&& sen[i]<='z')|| (sen[i]>='0'&&sen[i]<='9')){
            cnt++;
            string+=sen[i];
        }
    }
    var token = 'uxe1vzfa60';
    token = maxString+token;
    for(var i=0;i<token.length;i++)
    {
        console.log('loop');
        if(((i+1)%3) == 0)
        {
            console.log(i);
            // token[i]='X';
            console.log(token[i]);
            token=token.replace(token[i],'X');
            
        }
    }
    sen = token;
    return sen;
}
console.log(stringChallenge('fun&!! time'));


for(var i=0;i<finalResult.length;i++)
    {
        
        if(((i+1)%3) == 0)
        {
            
            finalResult=finalResult.replace(token[i],'X');
            
        }
    }
    return finalResult