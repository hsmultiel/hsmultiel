// 섹션 스크롤
function scrolltoSection(id) {
    const section = document.querySelector(`#${id}`).offsetTop;
    window.scrollTo({left: 0, top: section - 68, behavior: 'smooth'});
}

// 다크 모드
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
// } else {
//     document.documentElement.classList.remove('dark')
// }