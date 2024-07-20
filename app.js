let btn1 = document.getElementById('btn1')
let count = 0
btn1.addEventListener('click', () => {
    count++
    let name = document.getElementById('NAME').value
    let name1 = document.getElementById('NAME')
    let roll = document.getElementById('ROLL').value
    let roll1 = document.getElementById('ROLL')
    if (name == '' || roll == '') {
        alert("enter required field")
    }
    else if (name != '' && roll != '') {
        let show = document.getElementById('show')
        show.innerHTML += `<tr>
                                <th width="30">${count}</th>
                                <td width="auto">${name}</td>
                                <td width="70">${roll}</td>
                            </tr>`
        name1.value = ""
        roll1.value = ""
    }
    else {
        alert("enter required field")
    }
})
