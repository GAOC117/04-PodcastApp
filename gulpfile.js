const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//Imagenes
const imagemin = require("gulp-imagemin");


function css(done){
    src("src/scss/app.scss")//Identificar el archivo principal de la hoja de estilos
    .pipe(sass())//Compilar sass
    .pipe(dest("build/css"));//Exportar o guardarlo en una ubicación
    done();
}


function dev(){
    watch("src/scss/**/*.scss",css); //revisa que archivo es el que cambia y manda a llamar la que genera todo
}

function imagenes(done){
    src("src/img/**/*") //sin extension busca todos los formatos
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest("build/img"));
    done();
}

exports.css = css; //escribiendo gulp css
exports.dev = dev; //escribiendo gulp dev
exports.imagenes = imagenes; //escribiendo gulp imagenes
exports.default = series(imagenes, css, dev); //aqui solo con escribir gulp