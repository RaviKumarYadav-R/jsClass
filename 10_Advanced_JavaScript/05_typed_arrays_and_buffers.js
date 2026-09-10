//* ============================================================
//* TYPED ARRAYS, ARRAYBUFFER & DATAVIEW
//* ============================================================

//* ArrayBuffer represents a fixed-length block of raw binary data.
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength);

//* Typed arrays provide typed views over binary memory.
const numbers = new Uint8Array(buffer);
numbers[0] = 255;
numbers[1] = 42;
console.log(numbers);

//* DataView provides flexible reading/writing of multiple numeric
//* representations and explicit endianness control.
const view = new DataView(buffer);
view.setUint16(2, 500);
console.log(view.getUint16(2));

//* Use cases: binary protocols, files, graphics, Web APIs and
//* performance-sensitive binary data processing.
//* Do not confuse a typed array with a normal JavaScript Array.