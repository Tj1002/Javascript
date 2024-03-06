//*************************for Loop:*************************** */
for (let i = 0; i < 5; i++) {
  console.log("for-Iteration", i);
}
//*************************while Loop:****************************************** */
let i = 0;
while (i < 5) {
  console.log("while-Iteration", i);
  i++;
}
//*********************************do-while Loop:******************************* */
let int = 0;
do {
  console.log("do-while Iteration", int);
  int++;
} while (int < 5);
//**************************************************************Using break):
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Stop the loop when i equals 3
  }
  console.log("Iteration", i);
}
//****************************************************continue */
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip the iteration when i equals 3
  }
  console.log("Iteration", i);
}
