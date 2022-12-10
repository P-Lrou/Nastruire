"use strict"

/********DECLARATION DEPUIS HTML********/
let accueil = document.querySelectorAll('#accueil')
let galerie = document.querySelectorAll('#galerie')
let quisommesnous = document.querySelectorAll('#quisommesnous')
let telechargements = document.querySelectorAll('#telechargements')
let contacts = document.querySelectorAll('#contacts')

let accueilAll = document.querySelector('.accueilAll')
let galerieAll = document.querySelector('.galerieAll')
let quisommenousAll = document.querySelector('.quisommenousAll')
let téléchargementAll = document.querySelector('.téléchargementAll')
let contactsAll = document.querySelector('.contactsAll')


/************DECLARATION ANIM***********/
const headerAnim = () => {
    gsap.from("header", { y: -150, duration: 2 });
}

const accueilAnim = () => {
    gsap.from(".video1", { x: 1850, duration: 2 });
    gsap.from(".main_page", { x: 1850, duration: 4 });
}

const galerieAnim = () => {
    let images = document.querySelectorAll('.galerie_images img')
    gsap.from(".video", { x: 1850, duration: 2, stagger: 0.3, });
    gsap.from(".galerie_images img", { x: 1850, duration: 2, stagger: 0.3, });
}


/*********CHANGEMENT CATEGORIES*********/
accueil.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "block"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "none"
        contactsAll.style.display = "none"
        accueilAnim()
    })
})

galerie.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "block"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "none"
        contactsAll.style.display = "none"
        galerieAnim()
    })
})

quisommesnous.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "block"
        téléchargementAll.style.display = "none"
        contactsAll.style.display = "none"
    })
})

telechargements.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "block"
        contactsAll.style.display = "none"
    })
})

contacts.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "none"
        contactsAll.style.display = "block"
    })
})

headerAnim()
accueilAnim()