//challenge

// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, etcetera).

// solution
function getSize(w, h, d) {
  let sA = (2*d*w)+(2*d*h)+(2*w*h)
  let volume = w*d*h
  return [sA, volume]
}