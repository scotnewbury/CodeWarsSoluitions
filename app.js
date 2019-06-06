function rgb( ...args){
  // complete this function  
  hex = '';

  args.forEach (arg => {
    if (arg < 0) {
      arg = 0;
    } else if (arg > 255) {
      arg = 255;
    }

    if (arg < 16) {
      hex += '0';
    }
    hex += arg.toString(16).toUpperCase();
   
  })

  return hex;
}

console.log(rgb(300,255,-20));
