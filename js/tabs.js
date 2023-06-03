const tabsButtons = document.querySelectorAll('[data-tabs-dish]');

const tabsContent = document.querySelectorAll('[data-tabs-content]');


for (let btn of tabsButtons){
    btn.addEventListener('click' , () => {
        tabsButtons.forEach(item => {
            item.classList.remove('active')
            btn.classList.add('active')
        })
        tabsContent.forEach(content => {
            if (content.dataset.tabsContent === btn.dataset.tabsDish){
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
    })
}