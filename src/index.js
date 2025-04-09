// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random');
const tableBody = document.querySelector('tbody#contacts');

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement('tr');
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((element) => {
  const newContact = document.createElement('tr');
  newContact.innerHTML = `
    <td>
      <img src="${element.pictureUrl}" />
    </td>
    <td> ${element.name} </td>
    <td> ${element.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newContact);
  // ITERATION 2 - Delete Buttons
  const btnDelete = newContact.querySelector('.btn-delete');
  btnDelete.addEventListener('click', () => {
    newContact.remove();
  });
  // ITERATION 3 - Like Buttons
  const btnLike = newContact.querySelector('.btn-like');
  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('selected');
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

const rndmContactBtn = document.getElementById('btn-add-random');
rndmContactBtn.addEventListener('click', () => {
  randNum = Math.floor(Math.random() * contacts.length);
  const rndmContact = document.createElement('tr');
  rndmContact.innerHTML = `
    <td>
      <img src="${contacts[randNum].pictureUrl}" />
    </td>
    <td> ${contacts[randNum].name} </td>
    <td> ${contacts[randNum].popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(rndmContact);
  const btnDelete = rndmContact.querySelector('.btn-delete');
  btnDelete.addEventListener('click', () => {
    rndmContact.remove();
  });

  const btnLike = rndmContact.querySelector('.btn-like');
  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('selected');
  });
});
