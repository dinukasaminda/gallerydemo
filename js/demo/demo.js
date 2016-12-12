/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  var carouselLinks = [];
var linksContainer = $('#links');

  // Load demo images from flickr:
carouselLinks.push({
        href: '1.jpg',
        title: '0'
      });
carouselLinks.push({
        href: '2.jpg',
        title: '1'
      });
carouselLinks.push({
        href: '3.jpg',
        title: '3'
      });

    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })

