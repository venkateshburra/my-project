document.getElementById('loginBtn').addEventListener('click', () => {
  const secondChild = document.querySelector('.Second_child');
  const regionHide = document.querySelector('.region_hide');
  const houseHide = document.querySelector('.house');
  const traiAngle = document.querySelector('.region_items2');
  const parentHide = document.querySelector('.parent');

  secondChild.classList.add('animate-down1');
  regionHide.classList.add('animate-down2');
  houseHide.classList.add('animate-down3');
  traiAngle.classList.add('animate-down4');

  // 1
    setTimeout(() => {
      secondChild.classList.remove('animate-down1');
      secondChild.classList.add('return-to-original1');
      parentHide.style.display = 'block';


    }, 5000); // 5 seconds delay

    setTimeout(() => {
      secondChild.classList.remove('return-to-original1');
    }, 1000);


    // 2
    
    setTimeout(() => {
      regionHide.classList.remove('animate-down2');


      regionHide.classList.add('return-to-original2');


    }, 4000); // 5 seconds delay

    setTimeout(() => {
      regionHide.classList.remove('return-to-original2');

    }, 1000);



    // 3
    
    setTimeout(() => {
  
      houseHide.classList.remove('animate-down3');
      houseHide.classList.add('return-to-original3');
       parentHide.style.display = 'none';





    }, 3000); // 5 seconds delay

    setTimeout(() => {
      houseHide.classList.remove('return-to-original3');

    }, 1000);


    // 4
    setTimeout(() => {
  
      traiAngle.classList.remove('animate-down4');
      traiAngle.classList.add('return-to-original4');


    }, 4000); // 5 seconds delay

    setTimeout(() => {
      traiAngle.classList.remove('return-to-original4');

    }, 1000);


 });

