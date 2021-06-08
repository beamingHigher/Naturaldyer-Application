//Dom ELEMENT
import { login, register, logout } from './auth';
import { create, edit , remove} from './admin';

const htmlForm = document.getElementById('htmlForm');
const logOutBtn = document.getElementById('logout');
const deleteBtn = document.getElementById('deleteBtn');


if (logOutBtn) {
  logOutBtn.addEventListener('click', e => {
    e.preventDefault();
    logout();
  });
} 

if (deleteBtn) {
  deleteBtn.addEventListener('click', e => {
    e.preventDefault();
    const model = document.getElementById('modelPanel').getAttribute('data-model');
    const id = document.getElementById('deleteModal').getAttribute('data-id');
    remove(model, id);
  });
} 

var createNewForm = function(fields) {
  var form = new FormData();
  for (var i =0; i < fields.length; i++){
    form.append(fields[i], document.getElementById(fields[i]).value);
  }
  return form;
}

// var createEditData = function(fields) {
//   let data = {};
//   for (var i =0; i < fields.length; i++){
//     data[fields[i]] = document.getElementById(fields[i]).value;
//   }
//   return data;
// }

var getloginDetails = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
}

var getregistrationDetails = function() {
  let registrationFormDetails = {};
  registrationFormDetails = { ...registrationFormDetails, name: document.getElementById('name').value};
  registrationFormDetails = { ...registrationFormDetails, email: document.getElementById('email').value};
  registrationFormDetails = { ...registrationFormDetails, phone: document.getElementById('phone').value};
  registrationFormDetails = { ...registrationFormDetails, password: document.getElementById('password').value};
  registrationFormDetails = { ...registrationFormDetails, confirmPassword: document.getElementById('confirmPassword').value};
  if (!document.querySelector('input[name="customerType"]:checked')) {
    registrationFormDetails = { ...registrationFormDetails, userType: "professional"}
  }else{
    registrationFormDetails = { ...registrationFormDetails, userType: document.querySelector('input[name="customerType"]:checked').value}
  }
  register(registrationFormDetails);
}

var getNewYarnDetails = function() {
  var fields = ['title', 'code','supplierId','material','weight','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="activeForBusiness"]:checked')) 
    form.append('activeForBusiness', 'true');
  if (document.querySelector('input[id="activeForCustomers"]:checked')) 
    form.append('activeForCustomers', 'true');
  create(form, 'yarns');
}

// var getEditYarnDetails = function() {
//   var fields = ['title', 'code','supplierId','material','weight','description','notes']
//   const id = document.getElementById('_id').value
//   var data = createEditData(fields)
//   edit(data, 'yarns', id);
// }

var getEditYarnDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, code: document.getElementById('code').value};
  registrationFormDetails = { ...registrationFormDetails, title: document.getElementById('title').value};
  registrationFormDetails = { ...registrationFormDetails, material: document.getElementById('material').value};
  registrationFormDetails = { ...registrationFormDetails, weight: document.getElementById('weight').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="activeForBusiness"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, activeForBusiness: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, activeForBusiness: "false"};
  if (document.querySelector('input[id="activeForCustomers"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, activeForCustomers: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, activeForCustomers: "false"};
  edit(registrationFormDetails, 'yarns', id);
}

var getNewColourDetails = function() {
  var fields = ['title', 'code','yarnId','hexadecimalColour','costperKilograms','supplement','supplementCost','samplePrice','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'colours');
}
var getEditColourDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, code: document.getElementById('code').value};
  registrationFormDetails = { ...registrationFormDetails, title: document.getElementById('title').value};
  registrationFormDetails = { ...registrationFormDetails, hexadecimalColour: document.getElementById('hexadecimalColour').value};
  registrationFormDetails = { ...registrationFormDetails, costperKilograms: document.getElementById('costperKilograms').value};
  registrationFormDetails = { ...registrationFormDetails, supplement: document.getElementById('supplement').value};
  registrationFormDetails = { ...registrationFormDetails, supplementCost: document.getElementById('supplementCost').value};
  registrationFormDetails = { ...registrationFormDetails, samplePrice: document.getElementById('samplePrice').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'colours', id);
}

var getNewProductCategoryDetails = function() {
  console.log('productCategory')
  var fields = ['name','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'productCategorys');
}

var getEditProductCategoryDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, name: document.getElementById('name').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'productCategorys', id);
}


var getNewPatternDetails = function() {
  var fields = ['code','supplierId','sizeId','moduleNumber','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'patterns');
}

var getEditPatternDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, code: document.getElementById('code').value};
  registrationFormDetails = { ...registrationFormDetails, moduleNumber: document.getElementById('moduleNumber').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'patterns', id);
}

var getNewWarpDetails = function() {
  var fields = ['title', 'code','productCategory','weight','material','costPerKg','supplement','costSupplement','colour','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'warps');
} 

var getEditWarpDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, code: document.getElementById('code').value};
  registrationFormDetails = { ...registrationFormDetails, title: document.getElementById('title').value};
  registrationFormDetails = { ...registrationFormDetails, material: document.getElementById('material').value};
  registrationFormDetails = { ...registrationFormDetails, weight: document.getElementById('weight').value};
  registrationFormDetails = { ...registrationFormDetails, costPerKg: document.getElementById('costPerKg').value};
  registrationFormDetails = { ...registrationFormDetails, supplement: document.getElementById('supplement').value};
  registrationFormDetails = { ...registrationFormDetails, costSupplement: document.getElementById('costSupplement').value};
  registrationFormDetails = { ...registrationFormDetails, colour: document.getElementById('colour').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'warps', id);
}

var getNewLoomDetails = function() {
  var fields = ['name', 'supplierId','warpId','chainReduction','costPerBeat','highInCm','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'looms');
}

var getEditLoomDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, name: document.getElementById('name').value};
  registrationFormDetails = { ...registrationFormDetails, chainReduction: document.getElementById('chainReduction').value};
  registrationFormDetails = { ...registrationFormDetails, costPerBeat: document.getElementById('costPerBeat').value};
  registrationFormDetails = { ...registrationFormDetails, highInCm: document.getElementById('highInCm').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'looms', id);
}

var getNewCollectionDetails = function() {
  var fields = ['name', 'additionalPercentage','loomId','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'collections');
}

var getEditCollectionDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, name: document.getElementById('name').value};
  registrationFormDetails = { ...registrationFormDetails, additionalPercentage: document.getElementById('additionalPercentage').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'collections', id);
}

var getNewSizeDetails = function() {
  var fields = ['name','collectionId', 'length','plotsReduction','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'sizes');
}

var getEditSizeDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, name: document.getElementById('name').value};
  registrationFormDetails = { ...registrationFormDetails, length: document.getElementById('length').value};
  registrationFormDetails = { ...registrationFormDetails, plotsReduction: document.getElementById('plotsReduction').value};
  registrationFormDetails = { ...registrationFormDetails, description: document.getElementById('description').value};
  registrationFormDetails = { ...registrationFormDetails, notes: document.getElementById('notes').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'sizes', id);
}

var getNewModuleDetails = function() {
  var fields = ['code','patternId','minimumWeight','maximumWeight','beatsNumber','order']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('file_input').files[0]);
  if (document.querySelector('input[id="active"]:checked')) 
    form.append('active', 'true');
  create(form, 'modules');
} 

var getEditModuleDetails = function() {
  let registrationFormDetails = {};
  const id = document.getElementById('_id').value
  registrationFormDetails = { ...registrationFormDetails, code: document.getElementById('code').value};
  registrationFormDetails = { ...registrationFormDetails, minimumWeight: document.getElementById('minimumWeight').value};
  registrationFormDetails = { ...registrationFormDetails, maximumWeight: document.getElementById('maximumWeight').value};
  registrationFormDetails = { ...registrationFormDetails, order: document.getElementById('order').value};
  registrationFormDetails = { ...registrationFormDetails, beatsNumber: document.getElementById('beatsNumber').value};
  if (document.querySelector('input[id="active"]:checked')) 
    registrationFormDetails = { ...registrationFormDetails, active: "true"};
  else
    registrationFormDetails = { ...registrationFormDetails, active: "false"};
  edit(registrationFormDetails, 'modules', id);
}

if (htmlForm) {
  var formName = document.getElementById('htmlForm').getAttribute('name');
  switch(formName) {
    case "login" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getloginDetails();
    }); break;
    case "registration" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getregistrationDetails();
    }); break;
    case "createYarn" : htmlForm.addEventListener('submit', e => {
      console.log('inside event listner')
      e.preventDefault();
      getNewYarnDetails();
    }); break;
    case "editYarn" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditYarnDetails();
    }); break;
    case "createColour" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewColourDetails();
    }); break;
    case "editColour" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditColourDetails();
    }); break;
    case "createProductCategory" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewProductCategoryDetails();
    }); break;
    case "editProductCategory" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditProductCategoryDetails();
    }); break;
    case "createPattern" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewPatternDetails();
    }); break;
    case "editPattern" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditPatternDetails();
    }); break;
    case "createWarp" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewWarpDetails();
    }); break;
    case "editWarp" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditWarpDetails();
    }); break;
    case "createLoom" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewLoomDetails();
    }); break;
    case "editLoom" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditLoomDetails();
    }); break;
    case "createCollection" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewCollectionDetails();
    }); break;
    case "editCollection" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditCollectionDetails();
    }); break;
    case "createSize" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewSizeDetails();
    }); break;
    case "editSize" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditSizeDetails();
    }); break;
    case "createModule" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewModuleDetails();
    }); break;
    case "editModule" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditModuleDetails();
    }); break;
  }
}