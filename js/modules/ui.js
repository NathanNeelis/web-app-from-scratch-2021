// update the ui
export function updateUI(route1, route2) {
    const section = document.querySelectorAll('section');
    const activeSectionOne = document.querySelector('.' + route1);
    const activeSectionTwo = document.querySelector('.' + route2);

    section.forEach(section => {
        section.classList.remove('active')
    })


    if (route1) {
        activeSectionOne.classList.add('active')
    }

    if (route2) {
        activeSectionTwo.classList.add('active')
    }

}