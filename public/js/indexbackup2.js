

//Dom ELEMENT
// import '@babel/polyfill';
//import { login, register } from './auth';
//import { create, edit} from './admin';
// import axios from 'axios';

const htmlForm = document.getElementById('htmlForm');

var create = async (data, model) => {
  console.log('create')
  console.log(JSON.stringify(data));
  try {
      const res = await axios({
        method: 'POST',
        url: '/api/v1/' + model,
        data: data
      });

      if (res.data.status === 'success') {
      window.setTimeout(() => {
          location.assign('/user/' + model + '/list');
      }, 1500);
      }
  } catch (err) {
      console.log(err);
  }
};

var edit = async (data, model) => {
  console.log(data.get('title'));
  try {
      const res = await axios({
        method: 'PATCH',
        url: `/api/v1/yarns/${data.get("_id")}`,
        data: data
      });

      if (res.data.status === 'success') {
      window.setTimeout(() => {
          location.assign('/user/' + model + '/list');
      }, 1500);
      }
  } catch (err) {
      console.log(err);
  }
};



var createNewForm = function(fields) {
  var form = new FormData();
  for (var i =0; i < fields.length; i++){
    form.append(fields[i], document.getElementById(fields[i]).value);
  }
  return form;
}

var getloginDetails = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
}

var getregistrationDetails = function() {
  const form = new FormData();
  form.append('name', document.getElementById('name').value);
  form.append('email', document.getElementById('code').value);
  form.append('phone', document.getElementById('phone').value);
  form.append('password', document.getElementById('password').value);
  form.append('confirmPassword', document.getElementById('confirmPassword').value);
  register(form);
}

var getNewYarnDetails = function() {
  var fields = ['title', 'code','supplierId','material','weight','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'yarns');
}

var getEditYarnDetails = function() {
  var fields = ['title', 'code','supplierId','_id','material','weight','description','notes']
  var form = createNewForm(fields)
  edit(form, 'yarns');
}

var getNewColourDetails = function() {
  var fields = ['title', 'code','yarnId','hexadecimalColour','costperKilograms','supplement','supplementCost','samplePrice','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'colours');
}
var getEditColourDetails = function() {
  var fields = ['title', 'code','yarnId','hexadecimalColour','costperKilograms','supplement','supplementCost','samplePrice','description','notes']
  var form = createNewForm(fields)
  edit(form, 'colours');
}

var getNewProductCategoryDetails = function() {
  console.log('productCategory')
  var fields = ['name','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'productCategorys');
}

var getEditProductCategoryDetails = function() {
  var fields = ['name','description','notes']
  var form = createNewForm(fields)
  edit(form, 'productCategorys');
}


var getNewPatternDetails = function() {
  var fields = ['code','supplierId','sizeId','moduleNumber','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'patterns');
}

var getEditPatternDetails = function() {
  var fields = ['code','supplierId','sizeId','moduleNumber','description','notes']
  var form = createNewForm(fields)
  edit(form, 'patterns');
}

var getNewWarpDetails = function() {
  var fields = ['title', 'code','productCategory','weight','material','costPerKg','supplement','costSupplement','colour','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'warps');
} 

var getEditWarpDetails = function() {
  var fields = ['title', 'code','productCategory','weight','material','costPerKg','supplement','costSupplement','colour','description','notes']
  var form = createNewForm(fields)
  edit(form, 'warps');
}

var getNewLoomDetails = function() {
  var fields = ['name', 'supplierId','warpId','chainReduction','costPerBeat','highInCm','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'warps');
}

var getEditLoomDetails = function() {
  var fields = ['name', 'supplierId','warpId','chainReduction','costPerBeat','highInCm','description','notes']
  var form = createNewForm(fields)
  edit(form, 'warps');
}

var getNewCollectionDetails = function() {
  var fields = ['name', 'additionalPercentage','loomId','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'warps');
}

var getEditCollectionDetails = function() {
  var fields = ['name', 'additionalPercentage','loomId','description','notes']
  var form = createNewForm(fields)
  edit(form, 'warps');
}

var getNewSizeDetails = function() {
  var fields = ['name', 'length','plotsReduction','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'warps');
}

var getEditSizeDetails = function() {
  var fields = ['name', 'length','plotsReduction','description','notes']
  var form = createNewForm(fields)
  edit(form, 'warps');
}

var getNewModuleDetails = function() {
  var fields = ['code','patternId','minimumWeight','maximumWeight','beatsNumber','order','description','notes']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  create(form, 'warps');
} 

var getEditModuleDetails = function() {
  var fields = ['code','patternId','minimumWeight','maximumWeight','beatsNumber','order','description','notes']
  var form = createNewForm(fields)
  edit(form, 'warps');
}

if (htmlForm){
  console.log('inside if')
  var formName = document.getElementById('htmlForm').name;
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
    case "EditWarp" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditWarpDetails();
    }); break;
    case "createLoom" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewLoomDetails();
    }); break;
    case "EditLoom" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditLoomDetails();
    }); break;
    case "createCollection" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewCollectionDetails();
    }); break;
    case "EditCollection" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditCollectionDetails();
    }); break;
    case "createSize" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewSizeDetails();
    }); break;
    case "EditSize" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditSizeDetails();
    }); break;
    case "createModule" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getNewModuleDetails();
    }); break;
    case "EditModule" : htmlForm.addEventListener('submit', e => {
      e.preventDefault();
      getEditModuleDetails();
    }); break;
  }
}