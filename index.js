//// 1
const list1 = document.querySelectorAll("#list > li")
const list2 = document.getElementById("list").getElementsByTagName("li")

let str = ''
str += list1[0].childNodes[0].textContent + ", "
str += list1[4].childNodes[0].textContent + ", "
str += list1[1].childNodes[0].textContent + ", "
str += list1[3].childNodes[0].textContent + ", "
str += list1[2].childNodes[0].textContent
console.log("Output result: " + str);
str = ''
str += list2[0].childNodes[0].textContent + ", "
str += list2[4].childNodes[0].textContent + ", "
str += list2[1].childNodes[0].textContent + ", "
str += list2[3].childNodes[0].textContent + ", "
str += list2[2].childNodes[0].textContent
console.log("Output result: " + str);

//// 2
const h1Element = document.getElementsByTagName('h1')[0]
h1Element.style.width = '300px'
h1Element.style.backgroundColor = 'red'
const ps = document.getElementById("myDiv").getElementsByTagName("p")
ps[0].style.fontWeight = "bold"
ps[1].style.color = "red"
ps[2].style.textDecoration = 'underline'
ps[3].style.fontStyle = 'italic'
const myList = document.getElementById("myList")
myList.style.display = 'flex'
myList.style.listStyle = 'none'
const span = document.getElementsByTagName("span")[0]
span.style.visibility = 'hidden'

//// 3
const liveButton = document.getElementById("liveButton")
const root = document.getElementById("root")

liveButton.addEventListener("click", () => {
    let p = document.createElement('p')
    p.textContent = "I was pressed!"
    root.appendChild(p)
})

liveButton.addEventListener("mouseover", () => {
    let p = document.createElement('p')
    p.textContent = "Mouse on me!"
    root.appendChild(p)
})

liveButton.addEventListener("mouseleave", () => {
    let p = document.createElement('p')
    p.textContent = "Mouse is not on me!"
    root.appendChild(p)
})