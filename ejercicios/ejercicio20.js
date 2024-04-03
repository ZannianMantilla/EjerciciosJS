let a = 1;
let b = -3;
let c = 2;
let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
  let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  console.log("Las raíces reales son:", x1, "y", x2);
} else if (discriminante === 0) {

  let x = -b / (2 * a);
  console.log("La raíz real única es:", x);
} else {

  console.log("La ecuación no tiene raíces reales.");
}
