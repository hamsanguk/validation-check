// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const elInputUsername = document.querySelector('#username'),
  elFailureMessage = document.querySelector('.failure-message'),
  elSuccessMessage = document.querySelector('.success-message'),
  elPassword = document.getElementById('password'),
  elPasswordRetype = document.getElementById('password-retype'),
  elPWConfirmMsg = document.querySelector('.mismatch-message');





//사용자가 아이디 입력
function isMoreThan4Length(value) {
  return value.length > 3
}

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide')
    elFailureMessage.classList.add('hide')
  } else {
    elFailureMessage.classList.remove('hide')
    elSuccessMessage.classList.add('hide')
  }
}

//비밀번호 입력

elPasswordRetype.onkeyup = function () {
  if (isMatch(elPassword.value, elPasswordRetype.value)) {
    elPWConfirmMsg.classList.add('hide')
  } else {
    elPWConfirmMsg.classList.remove('hide')
  }
}


function isMatch(password1, password2) {
  return password1 === password2;
}











