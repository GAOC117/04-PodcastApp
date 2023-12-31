const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass')); 

function css(done) {
    src('src/scss/app.scss') //identificar el archivo principal
    .pipe(sass()) //Compilar SASS
    .pipe(dest('build/css')) //exportarlo o guardarlo en uuna ubicacion
    done();
}

function dev(){
    //watch('si hay cambios en este archivo', llama esta funcion)
    watch('src/scss/app.scss',css);
}

exports.css = css;
exports.dev = dev;