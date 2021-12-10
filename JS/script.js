function switch_theme(event) {
    bodyEle = document.querySelector('body').classList
    bodyEle.toggle('light-theme')
    bodyEle.toggle('dark-theme')
}

toggleButton = document.querySelector('.toggle')

toggleButton.addEventListener('click', switch_theme)