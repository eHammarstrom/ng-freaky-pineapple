/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@ngrx/core': 'vendor/@ngrx/core',
  '@ngrx/router': 'vendor/@ngrx/router',
  'path-to-regexp': 'vendor/path-to-regexp',
  'isarray': 'vendor/isarray',
  'query-string': 'vendor/query-string',
  'strict-uri-encode': 'vendor/strict-uri-encode'
};

/** User packages configuration. */
const packages: any = {
  '@ngrx/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  '@ngrx/router': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  'path-to-regexp': {
    main: 'index.js',
    defaultExtension: 'js'
  },
  'isarray': {
    main: 'index.js',
    defaultExtension: 'js'
  },
  'query-string': {
    main: 'index.js',
    defaultExtension: 'js'
  },
  'strict-uri-encode': {
    main: 'index.js',
    defaultExtension: 'js'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+contact',
  'app/+home',
  'app/toolbar',
  'app/+projects',
  'app/+spotify',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
