if (createColourForm)
  createColourForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log(createColourFormDetails)

    let createColourFormDetails = {};
    createColourFormDetails = { ...createColourFormDetails, title: document.getElementById('title').value};
    createColourFormDetails = { ...createColourFormDetails, code: document.getElementById('code').value};
    createColourFormDetails = { ...createColourFormDetails, yarnId: document.getElementById('yarnId').value};
    createColourFormDetails = { ...createColourFormDetails, image: document.getElementById('image').files[0]};
    createColourFormDetails = { ...createColourFormDetails, hexadecimalColour: document.getElementById('hexadecimalcolour').value};
    createColourFormDetails = { ...createColourFormDetails, costperKilograms: document.getElementById('costperkg').value};
    createColourFormDetails = { ...createColourFormDetails, supplement: document.getElementById('supplement').value};
    createColourFormDetails = { ...createColourFormDetails, supplementCost: document.getElementById('supplementcost').value};
    createColourFormDetails = { ...createColourFormDetails, samplePrice: document.getElementById('sampleprice').value};
    createColourFormDetails = { ...createColourFormDetails, description: document.getElementById('description').value};
    createColourFormDetails = { ...createColourFormDetails, notes: document.getElementById('notes').value};
    createColour(createColourFormDetails);
  });