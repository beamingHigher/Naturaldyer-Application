import axios from 'axios';

export const create = async (data, model) => {
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

export const edit = async (data, model, id) => {
    console.log(data)
    try {
        const res = await axios({
          method: 'PATCH',
          url: '/api/v1/' + model + '/' + id,
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

export const remove = async (model, id) => {
    try {
        const res = await axios({
          method: 'DELETE',
          url: '/api/v1/' + model + '/' + id,
        });
        if (res.status === 204) {
        window.setTimeout(() => {
            location.assign('/user/' + model + '/list');
        }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};
