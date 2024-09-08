import apiInstance from "./api-service";

const getBlogsList = async (data) => {
    if (!data?.page) data.page = 1;
    const queryParams = new URLSearchParams(data);
    const response = await apiInstance.get(`blogs?${queryParams}`);
    return response.data;
}

const getFeaturedBlogs = async (data) => {
    const response = await apiInstance.get(`blogs/latest-and-featured`);
    return response.data;
}

const getBlog = async (data) => {
    const queryParams = new URLSearchParams(data);
    const response = await apiInstance.get(`blogs?${queryParams}`);
    return response.data;
}

const blogServices = {
    getBlogsList,
    getFeaturedBlogs,
    getBlog
};

export default blogServices;