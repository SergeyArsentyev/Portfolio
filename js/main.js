// This script replaces the photograph of the author with simple text upon clicking on it

const toggleList=document.querySelector('#toggleList');
const rightDiv=document.querySelector('.right');

toggleList.addEventListener('click', () => {
    toggleList.textContent = 'I enjoy fruit and pull-ups';
    rightDiv.style.display = 'none';
});