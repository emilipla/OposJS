/*// Creación elementos en una lista desordenada
const lista=document.getElementById('lista') // Elemento padre
console.log(lista)

const li = document.createElement('li') // Creamos elemento
li.textContent = 'Primer elemento' // Añadimos texto

lista.appendChild(li) // Lo incorporamos a la lista */

// lo podemos sacar de una lista*/
const arraylis = ['Primer element','segundo','tercero','cuarto']

/*// Primera forma con forEach y textContent
arraylis.forEach(item => {
    console.log(item)
    const li = document.createElement('li')
    li.textContent = item
    lista.appendChild(li)
})*/

// Con forEach y innerHTML, menos código
arraylis.forEach(item => {
    console.log(item)  // Con innerHTML también se puden meter elementos
    lista.innerHTML += `<li>${item}</li>`
})