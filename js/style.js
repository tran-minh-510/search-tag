// const listSearchTags = ['Minh', 'Đức']

const input = document.querySelector('.wrapper input')
const wrapper = document.querySelector('.wrapper')

function render(text) {
    const createItem = document.createElement('div')
    createItem.className = 'wrapper-content'
    createItem.innerText = text
    const createDeleteBtn = document.createElement('span')
    createDeleteBtn.className = 'delete-tag'
    createDeleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    createItem.appendChild(createDeleteBtn)
    wrapper.prepend(createItem)
    // deleteTag()
}

function deleteTag() {
    const createItem = document.querySelectorAll('.delete-tag')
    createItem.forEach(item => {
        item.onclick = function () {
            this.parentElement.remove()
            console.log('123')
        }
    })
}

deleteTag()

input.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        if (input.value) {
            render(input.value.trim())
            input.value = null
            input.focus()
            deleteTag()
        } else {
            alert('Nội dung không hợp lệ')
        }
    }
})