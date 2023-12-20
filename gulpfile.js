const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass')); 

function css(done) {
    
    src('src/scss/app.scss') //identificar el archivo principal
    .pipe(sass()) //Compilar SASS
    .pipe(dest('build/css')) //exportarlo o guardarlo en uuna ubicacion



    
    done();
}

exports.css = css;