form.onsubmit = (event)=>{
    event.preventDefault()
    if(!password.value &&!nameI.value&&!last_name.value &&!email_set.value&&!password.value&&!password_set.value) hammasi_xato.textContent='Ma\'lumotlarni to\'ldiring !' 
    else hammasi_xato.textContent=''
    if(nameI.value.length>15) name_p.textContent='Iltimos 15 tadan kam belgi kiriting'
    else name_p.textContent=''
    if(last_name.value.length>15) lst_p.textContent='Iltimos 15 tadan kam belgi kiriting'
    else lst_p.textContent=''
    if(email_set.value.length<5) email_p.textContent='Iltimos 5 tadan ko\'p belgi kiriting'
    else if(email_set.value.indexOf('@')==-1) email_p.textContent='Emailga @ belgisini ham kiriting'
    else if(email_set.value.indexOf('.')==-1)  email_p.textContent='Emailga nuqta  ham kiriting'
    else email_p.textContent=''
    if(password.value.length!==8) password_p.textContent='Iltimos passwordga 8 ta belgi kiriting !'
    else if(!password.value.match(/[1-9]/)) password_p.textContent='Iltimos passwordga raqamlar kiriting !'
    else if(!password.value.match(/[a-z]/)) password_p.textContent='Iltimos passwordga kichkina harflar kiriting !'
    else if(!password.value.match(/[A-Z]/)) password_p.textContent='Iltimos passwordga katta harflar kiriting !'
    else password_p.textContent=''
    if(password.value !==password_set.value) password_pt.textContent='Parollar mos emas'
    else password_pt.textContent=''    
    if(!password_p.textContent&&!password_pt.textContent&&!name_p.textContent&&!lst_p.textContent&&!email_p.textContent) {
        hammasi_xato.style.color='green'
        hammasi_xato.textContent="Muvaffaqiyatli yuborildi"
    }
} 