//Dom ELEMENT
import '@babel/polyfill';
import { login, register } from './auth';
import { createYarn,editYarn,createColour ,editColour,createProductCategory,createPattern,createWarp} from './admin';

const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');
const createYarnForm = document.getElementById('createYarnForm');
const editYarnForm = document.getElementById('editYarnForm');
const createColourForm = document.getElementById('createColourForm');
const editColourForm = document.getElementById('editColourForm');
const createProductCategoryForm = document.getElementById('createProductCategoryForm');
const createPatternForm = document.getElementById('createPatternForm');
const createWarpForm = document.getElementById('createWarpForm');
//DELEGATION
if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (registrationForm)
  registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    let registrationFormDetails = {};
    registrationFormDetails = { ...registrationFormDetails, name: document.getElementById('name').value};
    registrationFormDetails = { ...registrationFormDetails, email: document.getElementById('email').value};
    registrationFormDetails = { ...registrationFormDetails, phone: document.getElementById('phone').value};
    if (document.querySelector('input[name="customerType"]:checked'))
      registrationFormDetails = { ...registrationFormDetails, role: document.querySelector('input[name="customerType"]:checked').value};
    registrationFormDetails = { ...registrationFormDetails, password: document.getElementById('password').value};
    registrationFormDetails = { ...registrationFormDetails, confirmPassword: document.getElementById('confirmPassword').value};
    
    register(registrationFormDetails);
  });
 
if (createYarnForm)
  createYarnForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', document.getElementById('title').value);
    form.append('code', document.getElementById('code').value);
    form.append('image', document.getElementById('image').files[0]);
    form.append('supplierId', document.getElementById('supplierId').value);
    form.append('material', document.getElementById('material').value);
    form.append('weight', document.getElementById('weight').value);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);
    createYarn(form, 'data');
  });

if (editYarnForm)
  editYarnForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', document.getElementById('title').value);
    form.append('code', document.getElementById('code').value);
    form.append('supplierId', document.getElementById('supplierId').value);
    form.append('_id', document.getElementById('yarnId').value);
    form.append('material', document.getElementById('material').value);
    form.append('weight', document.getElementById('weight').value);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);
    form.append('activeForBusiness', document.getElementById('activeForBusiness').value);
    form.append('activeForCustomers', document.getElementById('activeForCustomers').value);
    editYarn(form);
  });


if (createColourForm)
  createColourForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', document.getElementById('title').value);
    form.append('code', document.getElementById('code').value);
    form.append('image', document.getElementById('image').files[0]);
    form.append('yarnId', document.getElementById('yarnId').value);
    form.append('hexadecimalcolour', document.getElementById('hexadecimalcolour').value);
    form.append('costperKilograms', document.getElementById('costperkg').value);
    form.append('supplement', document.getElementById('supplement').value);
    form.append('supplementcost', document.getElementById('supplementcost').value);
    form.append('sampleprice', document.getElementById('sampleprice').value);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);

    createColour(form, 'data');
  });

if (editColourForm)
  editColourForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', document.getElementById('title').value);
    form.append('code', document.getElementById('code').value);
    form.append('yarnId', document.getElementById('yarnId').value);
    form.append('hexadecimalcolour', document.getElementById('hexadecimalcolour').value);
    form.append('costperKilograms', document.getElementById('costperkg').value);
    form.append('supplement', document.getElementById('supplement').value);
    form.append('supplementcost', document.getElementById('supplementcost').value);
    form.append('sampleprice', document.getElementById('sampleprice').value);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);

    editColour(form, 'data');
  });

if (createProductCategoryForm)
  createProductCategoryForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('image', document.getElementById('image').files[0]);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);

    createProductCategory(form, 'data');
  });

if (createPatternForm)
  createPatternForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('code', document.getElementById('code').value);
    form.append('image', document.getElementById('image').files[0]);
    form.append('supplierId', document.getElementById('supplierId').value);
    form.append('sizeId', document.getElementById('sizeId').value);
    form.append('moduleNumber', document.getElementById('modulenumber').value);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);

    createPattern(form, 'data');
  });

if (createWarpForm)
  createWarpForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', document.getElementById('title').value);
    form.append('code', document.getElementById('code').value);
    form.append('image', document.getElementById('image').files[0]);
    form.append('productCategory', document.getElementById('productCategory').value);
    form.append('weight', document.getElementById('weight').value);
    form.append('material', document.getElementById('material').value);
    form.append('costPerKg', document.getElementById('costperkg').value);
    form.append('supplement', document.getElementById('supplement').value);
    form.append('costSupplement', document.getElementById('costsupplement').value);
    form.append('colour', document.getElementById('colour').value);
    form.append('description', document.getElementById('description').value);
    form.append('notes', document.getElementById('notes').value);

    createWarp(form, 'data');
  });

  // ///////


  import axios from 'axios';

export const createYarn = async (data, model) => {
    console.log(JSON.stringify(data));
    try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/yarns',
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/yarns/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

export const editYarn = async (data, model) => {
    console.log(data.get('title'));
    try {
        const res = await axios({
          method: 'PATCH',
          url: `/api/v1/yarns/${data.get("_id")}`,
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/yarns/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

export const createColour = async (data) => {
    console.log(JSON.stringify(data));
    try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/colour',
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/colours/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

export const editColour = async (data) => {
    console.log(JSON.stringify(data));
    try {
        const res = await axios({
          method: 'PATCH',
          url: `/api/v1/colour/${data._id}`,
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/colours/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

export const createProductCategory = async (data) => {
    console.log(JSON.stringify(data));
    try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/productCategory',
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/productCategorys/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

export const createPattern = async (data) => {
    console.log(JSON.stringify(data));
    try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/pattern',
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/patterns/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

export const createWarp = async (data) => {
    console.log(JSON.stringify(data));
    try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/warp',
          data: data
        });

        if (res.data.status === 'success') {
        window.setTimeout(() => {
            location.assign('/user/warps/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

var getregistrationDetails = function() {
  var fields = ['name', 'email','phone','password','confirmPassword']
  var form = createNewForm(fields)
  form.append('image', document.getElementById('image').files[0]);
  const userType =
    !document.querySelector('input[name="customerType"]:checked').value
        ? 'professional'
        : document.querySelector('input[name="customerType"]:checked').value;
  form.append('userType', userType);
  register(form);
}

var createEditData = function(fields) {
  let data = {};
  for (var i =0; i < fields.length; i++){
    data[fields[i]] = document.getElementById(fields[i]).value;
  }
  return data;
}
