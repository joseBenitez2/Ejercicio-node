var fs=require('fs')

if(fs.existsSync('./EJE')){
    console.log()
}
else{
    fs.mkdirSync('EJE')
}

if(fs.existsSync('./EJE')){
    console.log('Carpeta creada')
}
else{
    console.log()
}

var archivo='rueda.txt'

var uno='Como esta usted? \n'
var dos='Bien y usted? '

if(fs.existsSync('./EJE')){
    fs.writeFileSync(archivo,uno)
    fs.appendFileSync(archivo,dos)
    console.log('Archivo creado')
}
else{
    fs.writeFileSync(archivo,uno)
    fs.appendFileSync(archivo,dos)
    console.log('Archivo creado')
}

 if(fs.existsSync('./EJE')){
    fs.renameSync('./rueda.txt','./EJE/rueda.txt')
}
else{
     console.log()
}

var file=fs.readdirSync('./')
var archivo=fs.readFileSync('./EJE/rueda.txt','utf-8')

console.log(archivo)

if(fs.existsSync('./EJE')){
    fs.unlinkSync('./EJE/rueda.txt')
    console.log('Archivo borrado')
}
else{
console.log()
}

fs.rmdirSync('./EJE', { recursive: true });
console.log('Carpeta removida');
