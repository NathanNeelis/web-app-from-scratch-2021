// update the ui
export function updateUI(route1, route2) {
    const section = document.querySelectorAll('section');
    const activeSectionOne = document.querySelector('.' + route1);
    const activeSectionTwo = document.querySelector('.' + route2);

    section.forEach(section => {
        section.classList.remove('active')
    })
    activeSectionOne.classList.add('active')
    activeSectionTwo.classList.add('active')
}