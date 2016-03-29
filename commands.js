// #For new
brew install npm

// #For updating
npm install npm -g

// #version
npm --version


// #Init project scaffolding (creates package.json)
npm init

// #for global package (demo only)
npm install angular --save

// #for dev packages
npm install gulp --save-dev



Add node_modules in .gitignore


// # Remove a package completely
npm rm angular
or
npm uninstall angular


// #install express server
npm install express --save

Add some code in index.js for server

// #Add this to scripts in package.json
"start": "node index.js"


//#Add route for get /
app.get('/', function(request, response){
  response.send("Hello World");
});


// #Set up views
var path = require('path');

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

// #install jade
npm install jade --save


// #configure routes
app.get(‘/’, function(request, response) {
  response.render('index');
});


// # Install gulp
npm install gulp-cli --globally
npm install gulp --save-dev


// # install gulp util for logging stuff.
Eg: gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));

npm install gulp-util --save-dev


// # Install gulp-coffee to compile coffeescript to js
npm install gulp-coffee --save-dev

// # Add task to compile and move stuff to public dir.

gulp.task('js', function () {
  gulp.src('src/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('public/js'));
})

// # install gulp-sass
npm install gulp-sass --save-dev

gulp.task('css', function(){
  gulp.src('app/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});


// # To serve static assets
app.use(express.static('public'));

 // Add link and script tags in index.jade
link(href="css/index.css" rel='stylesheet')
script(src="js/index.js")


//Add gulp watch task for hot compile
gulp.task('watch', function(){
  gulp.watch('app/src/**/*.coffee', ['js']);
  gulp.watch('app/styles/**/*.scss', ['css']);
});

//Add default task for running in sequence

npm install run-sequence --save-dev

var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(['css', 'js'], 'watch', callback);
});


// Jasmine Test Setup
npm install gulp-jasmine --save
npm install coffee-script --save-dev

var jasmine = require('gulp-jasmine');
require('coffee-script/register');

gulp.task('test', function () {
  gulp.src('test/**/*.coffee')
    .pipe(jasmine());
});







