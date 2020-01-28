import axiosInstance from './config';

const path = '/items';

const getItems = async () => {
    return axiosInstance
        .get(path)
        .then(({data}) => data)
}

export {
    getItems
}