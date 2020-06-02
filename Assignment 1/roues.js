const fs=require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title> Test routes </title></head>');
        res.write('<body>');
        res.write('<h3>Hello Friend!</h3>')
        res.write('<form action="/create-user" method = "POST"><input type="text" placeholder="username" name="username">')
        res.write('<button type="submit">Submit</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/users')
    {
        res.write('<html>');
        res.write('<head><title> Test routes </title></head>');
        res.write('<body>');
        res.write('<ul><li>User 0</li> <li>User 1</li> <li>User 2</li> <li>User 3</li> <li>User 4</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user' && method==='POST')
    {
        const body=[]; //data chunk ke form mai aa raha wse aarrray mai daal raha
        req.on('data',(chunk)=> {
            body.push(chunk);
        });
        //data ko ab string mai convert kar raha
            return req.on('end',()=> {
            const msg = Buffer.concat(body).toString();
            const finalMsg=msg.split('=')[1];
            console.log(finalMsg);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
            });
        }
        
    
};


module.exports = {
    handler : requestHandler,
    text: "HArd coded text",
};
