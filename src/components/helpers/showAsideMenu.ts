export const showAsideMenu = () => {

    const toShowBtn = document.getElementById('btnToShow') as HTMLDivElement;
    const menuAside = document.getElementById('asideMenu') as HTMLDivElement;


    if (menuAside.classList.contains('hidden')) {
        menuAside.classList.remove('hidden');
        menuAside.classList.add('show');
    } else {
        menuAside.classList.remove('show');
        menuAside.classList.add('hidden');
    }

}
