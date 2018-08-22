const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function addRemaningRadioheadMembers() {
radioheadRemainingMembers.map(member => {
  fetch("http://localhost:3000/members", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: member,
      band_id: 2
      })
    }).then(res => res.json().then(member=>console.log(member.id)))
  })
}



// function log(){
//   let members = fetch("http://localhost:3000/members").then(resp => resp.json()).then(data => [...data]).then(data => console.log(members.keys))
//
//   // members.map(member => {console.log(member.id)})
// }

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
