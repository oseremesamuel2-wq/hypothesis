const header = document.getElementById('siteHeader');
        window.addEventListener('scroll', () =>
    {
        header:classList.toggle('scrolled', window.scrollY > 10);
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    const toggle = document.querySelector('.menu-toggle');
    const navEL = document.querySelector('nav');

    toggle.addEventListener('click', () =>
{
    const open =
    navEL.style.display === 'block';
    navEL.style.display = open ?
    'none':'block';
    if(!open){
        navEL.style.position='absolute';
        navEL.style.top='64px';
        navEL.style.left='0'
        navEL.style.right='0'
        navEL.style.background='#fff';
        navEL.style.padding='16px 32px';
        navEL.style.boxShadow='0 12px 24px rgba(110,13,26,0.12)';
        navEL.querySelector('ul').style.flexDirection='column';
        navEL.querySelector('ul').style.alignItems='flex-start';
        navEL.querySelector('ul').style.gap='4px';

    }
});

navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navLinks.forEach(I=>I.classList.remove('active'));
        link.classList.add('active');
        if(window.innerWidth<=900)
    { navEL.style.display='none';}
    });
});