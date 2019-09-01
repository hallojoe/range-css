# range-css

A normalized CSS model for styling `<input type="range"...>` 

CSS model: 

    :root {
        --range-width: 100%;
        --range-height: 2.5rem;
        --range-track-height: 0.5rem;
        --range-track-width: 100%;
        --range-track-height: 0.5rem;
        --range-track-background: #fff;
        --range-track-background-focus: #fff;
        --range-track-border-width: 0.05rem;
        --range-track-border-style: outset;
        --range-track-border-color: rgba(0, 0, 0, 0.2);
        --range-track-box-shadow-width: 0rem;
        --range-track-box-shadow-color: transparent;
        --range-track-box-shadow: 0 0 0 var(--range-track-box-shadow-width) var(--range-track-box-shadow-color);
        --range-track-border-radius: 0.25rem;
        --range-track-border-radius-left: var(--range-track-border-radius);
        --range-track-border-radius-right: var(--range-track-border-radius);

        --range-thumb-width: 1.5rem;
        --range-thumb-height: 1.5rem;
        --range-thumb-background: green;
        --range-thumb-background-active: #007f00;
        --range-thumb-background-hover: #007f00;
        --range-thumb-background-focus: #007f00;
        --range-thumb-border-width: 0.05rem;
        --range-thumb-border-style: solid;
        --range-thumb-border-color: white;
        --range-thumb-box-shadow-width: 0.2rem;
        --range-thumb-box-shadow-color: rgba(0, 128, 0, 0.3);
        --range-thumb-box-shadow-color-active: rgba(0, 128, 0, 0.5);
        --range-thumb-box-shadow-color-hover: rgba(0, 128, 0, 0.5);
        --range-thumb-box-shadow-color-focus: rgba(0, 128, 0, 0.5);
        --range-thumb-box-shadow: 0 0 .2rem var(--range-thumb-box-shadow-width) var(--range-thumb-box-shadow-color);
        --range-thumb-box-shadow-active: 0 0 0 var(--range-thumb-box-shadow-width) var(--range-thumb-box-shadow-color-active;
        --range-thumb-box-shadow-hover: 0 0 0 var(--range-thumb-box-shadow-width) var(--range-thumb-box-shadow-color-hover);
        --range-thumb-box-shadow-focus: 0 0 0 var(--range-thumb-box-shadow-width) var(--range-thumb-box-shadow-color-focus);
        --range-thumb-border-radius: 50%;
        --range-thumb-cursor: pointer;
    }

The intent of this project is to build a cross-browser CSS model for `<input type="range"...>` html element - that ease the process of making it pretty.

Many good examples of styling range exist, but none that implement their own model through CSS variables. 

The CSS i build with SASS, and it provides two processing options:

 - variable, CSS variables enabled. Pure rock star - horray for CSS variables!
 - static, no CSS variables - Carved in stone - rock solid!

## Install 
`npm install range-css` 

## Build

`gulp` 

`gulp sass` 

`gulp sass:watch` 

`gulp webserver` 



## MS PITA
 - MS(of course) is a PITA by not supporting CSS variables in pseudo selectors that touch shadow DOM. This disqualifies IE and Edge from the real coolness. You have to live with the static build, or use some javascript that take care of CSS variable business. 

 - `track-height` cannot be greater than `range-height` or `thumb-height`. If you want to mimic(you will when using `box-shadow` and similar) a track with height greater than `range-height` or `thumb-height`


## Example
`<input type="range" value="5" min="0" max="10">`

<input type="range" value="5" min="0" max="10">




## Project structure

 - src
   - _variables.scss
   - _functions.scss
   - _mixins.scss
   - range.scss
   - range.ms.scss
   - range.moz.scss
   - range.webkit.scss
 - dist
   - ...
 - index.html

## Build 
To build run `gulp sass`. This will create the default build of range-css 

 -  



## SASS
Build with SASS 


