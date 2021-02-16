import {
    enable as enableDarkMode,
    disable as disableDarkMode,
  } from 'darkreader';


  export function mode(state){
    if(state  === false)
      enableDarkMode({
      brightness: 100,
      contrast: 900,
      sepia: 10,
    });

    else disableDarkMode()
  }
  