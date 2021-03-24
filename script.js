let yes = 0
// this means that number will be whatever the user inputs

document.getElementById('submit').addEventListener('click', compare)
// will activate function compare when button is clicked

function compare () {
  yes = document.getElementById('age').value
  if (yes >= 17) {
    document.getElementById('seventeen').style.display = 'block'
  } else if (yes >= 13) {
    document.getElementById('thirteen').style.display = 'block'
  } else if (yes >= 5) {
    document.getElementById('five').style.display = 'block'
  } else if (yes < 5) {
    document.getElementById('zero').style.display = 'block'
  }
}
// This is to determine the category the age belongs in and will reveal the message corresponding to it
