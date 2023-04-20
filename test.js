const express  = require('express')
const app = express();
const students = [
{
    name:'rokaia'

},
{
    name:'ziad'

},
{
    name:'ramadan'

}

];







const studentFunction  = (request,response) => {
    let output = '<ul>';

for (let i=0 ; i<students.length ; i ++){
    const student = students[i];
    output+= '<li>'+ student.name + '</li>'
}

output += '</ul>'
    
    response.send(output);
    
}
app.get('/students',studentFunction)




app.listen(5000);