/**
 * System configuration for Angular 2
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'dist',
    '@angular':                   'libs/@angular',
    'angular2-in-memory-web-api': 'libs/angular2-in-memory-web-api',
    'rxjs':                       'libs/rxjs',
    '@angular2-material':         'libs/@angular2-material'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  //material2 components
  var ngMaterial = [
     'core',
    'button',
    'card',
    'toolbar',
    'input',
    'card'
  ]

  // Load angular2 material
  function materialIndex(pkgName) {
    packages['@angular2-material/'+pkgName] = { main: `${pkgName}.js` };
  }

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  ngMaterial.forEach(materialIndex);

  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);