// 1

alert( null || 2 || undefined );

// 2

alert( alert(1) && alert(2) );

// 3

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);

// 4

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );