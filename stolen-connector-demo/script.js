const A = document.querySelectorAll('.circle');
let D = [];
let O = [[]];

for(let i = 0;i<A.length;i++) {
  D[i] = 0;O[i] = [];
  A[i].addEventListener('mousedown', (e) => {
    D[i] = 1;
    const rect = e.target.getBoundingClientRect();
    O[i][0] = e.clientX - rect.left;
    O[i][1] = e.clientY - rect.top;
  });
}

document.addEventListener('mousemove', (e) => {
  for(let i = 0;i<A.length;i++) {
    if(D[i]) {
      A[i].style.left = (e.clientX - O[i][0]) + 'px';
      A[i].style.top = (e.clientY - O[i][1]) + 'px';
    }
  }
});

document.addEventListener('mouseup', () => {
  for(let i = 0;i<A.length;i++) {D[i] = 0;}
});