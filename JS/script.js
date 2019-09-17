const items = document.querySelectorAll('#timeline li');

const isInViewoirt = el => {
  const rect = el.getBoundingClientRect();
  return(rect.top >= 0 && 
    rect.left >= 0 && 
    rect.bottom <= (window.innerHeight ||document.documentElement.clientHeight) &&
    rect.right <=(window.innerWidth || document.documentElement.clientWidth));
};

const run = () => items.forEach(item =>{
    if (isInViewoirt(item)){
      item.classList.add('show');
    }
  });

  window.addEventListener('load',run);
  window.addEventListener('resize', run);
  window.addEventListener('scroll', run);
