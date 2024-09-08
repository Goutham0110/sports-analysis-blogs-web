import apiInstance from "./api-service";

const subscribe = async (data) => {
    const res = await apiInstance.post('/subscribe', data);
    return res;
}

const mail = async(data)=>{
    const res = await apiInstance.post('/mail', data);
    return res;
}

const subscriberServices = {
    subscribe,
    mail
}
export default subscriberServices;