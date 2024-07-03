let floors = 5;
let center = Math.floor(floors/2);

for (let y=0; y<floors; y++) {
    // let range = Math.abs(center - y);
    let range = center - y;
    (range < 0) && (range *= -1 );
	for (let x=0; x<floors; x++) {
    	//document.write(range);
        if ( x > range-1 && x < floors-range) {
        	document.write("*");
        } else {
            document.write("-");
        }
    }
    document.write("<br>");
