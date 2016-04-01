clean: #empty built asset folder for fresh rebuild
	rm -rf dist
	mkdir -p dist/assets/css/vendor
	mkdir -p dist/assets/fonts
	mkdir -p dist/assets/js/vendor
	mkdir -p dist/assets/js/src
	echo "Cleaning built assets"

third-party: #3rd party asset build
	echo "Building 3rd party style / js / map assets"
	cp ./bower_components/bootstrap/dist/css/bootstrap.min.css dist/assets/css/vendor/bootstrap.min.css
	cp ./bower_components/bootstrap/dist/css/bootstrap.min.css.map dist/assets/css/vendor/bootstrap.min.css.map
	cp ./bower_components/angular/angular.min.js dist/assets/js/vendor/angular.min.js
	cp ./bower_components/angular/angular.min.js.map dist/assets/js/vendor/angular.min.js.map
	cp ./bower_components/bootstrap/dist/js/bootstrap.min.js dist/assets/js/vendor/bootstrap.min.js
	cp ./bower_components/jquery/dist/jquery.min.js dist/assets/js/vendor/jquery.min.js
	cp ./bower_components/jquery/dist/jquery.min.map dist/assets/js/vendor/jquery.min.map

styles: #build stylesheets
	echo "Building stylesheets"
	sass frontend/scss/*.scss dist/assets/css/styles.css

fonts: #build font assets
	echo "Building fonts"

jslib: # build JS lib
	echo "Building JS library"
	./node_modules/.bin/uglifyjs frontend/js/*.js frontend/js/**/*.js -o dist/assets/js/app.js --source-map dist/assets/js/app.js.map --source-map-root /assets/js/src --source-map-url /assets/js/app.js.map -p 1 -c -m 
	rsync -av --exclude=*~ frontend/js dist/assets/js/src

html: #build html assets
	echo "Building HTML assets"
	rsync -av --exclude=*~ frontend/html/ dist/

build: clean third-party styles fonts jslib html
	echo "Finished building assets"
