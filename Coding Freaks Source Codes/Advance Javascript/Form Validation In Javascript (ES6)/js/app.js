const submit = document.querySelector('#submit');

const success = (holder) => {
    holder.classList.remove('error')
    holder.classList.add('success')
    holder.children[4].innerHTML = ''
}

const error = (holder, msg) => {
    holder.classList.remove('success')
    holder.classList.add('error')
    holder.children[4].innerHTML = msg
}


const isEmpty = (holder) => {
    const result = holder.children[1].value === '' ? true : false
    result ? error(holder, 'Value Is Required') : success(holder)
    return result
}

const lengthChecker = (holder, len = 3) => {
    const result = holder.children[1].value.length >= len
    !result ? error(holder, `Length Should Be Atleast ${len} characters`) : success(holder)
    return result
}

const passwordValidator = (keyholder, confirmHolder) => {
    const result = keyholder.children[1].value === confirmHolder.children[1].value
    !result ? error(confirmHolder, `Confirm And Password Should Be Same`) : success(confirmHolder)
    return result

}

const strongPassword = (holder) => {
    const value = holder.children[1].value
    const numeric = new RegExp('[0-9]').test(value)
    const small = new RegExp('[a-z]').test(value)
    const caps = new RegExp('[A-Z]').test(value)
    const symbol = new RegExp('[!@#$%^&*]').test(value)
    if (numeric && small && caps && symbol) {
        success(holder)
        return true
    } else {
        error(holder, 'A Strong Password Is Required. Ex- Batman3638!@#')
        return false
    }
}

const isEmailValid = (holder) => {
    const value = holder.children[1].value
    const regex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}.[A-Za-z]{2,}$/
    const result = regex.test(value)
    result ? success(holder) : error(holder, 'A Valid Email Is Required Ex: bruce@batman.com')
    console.log(result)
    return result
}

const validateMsg = (holder, parent, small = document.getElementById('small')) => {
    const res = holder.value.trim().length > 20
    if (res) {
        parent.classList.add('success')
        parent.classList.remove('error')
    } else {
        parent.classList.add('error')
        // parent.children[6].innerHTML = 'Atleast 20 characters are required'
        small.innerHTML = 'Atleast 20 characters are required'
        parent.classList.remove('success')
    }
    return res
}

submit.addEventListener('click', () => {
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#confirm');
    const textarea = document.querySelector('#msg')
    const parent = textarea.parentNode
    const small = document.getElementById('small')

    // console.log(isEmpty(email))
    // console.log(isEmpty(password))
    // console.log(isEmpty(confirm))

    // true  and  false => false
    // true and true => true
    // false and false => false
    // false and true => false

    // if (strongPassword(password)) {
    // }


    if (!isEmpty(username) && lengthChecker(username, 3) && !isEmpty(email) && isEmailValid(email) && !isEmpty(password) && lengthChecker(password, 6) && strongPassword(password) && !isEmpty(confirm) && lengthChecker(confirm, 6) && passwordValidator(password, confirm) && validateMsg(textarea, parent)) {
        console.log('All Good')
    }
})
