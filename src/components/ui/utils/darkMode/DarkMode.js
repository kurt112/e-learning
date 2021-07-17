/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    enable as enableDarkMode,
    disable as disableDarkMode,
  } from 'darkreader';


  export function mode(state){
    if(state  === false)
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10
    });

    else disableDarkMode()
  }
  