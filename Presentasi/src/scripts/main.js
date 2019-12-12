// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var extern = require('bespoke-extern');
var carousel = require('bespoke-theme-carousel');

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
    classes(),
    carousel(),
    nav(),
    scale(),
    bullets('.build, .build-items > *:not(.build-items)'),
    hash(),
    extern(bespoke)
]);