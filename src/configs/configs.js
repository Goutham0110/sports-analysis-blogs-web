const configs = {
    BASE_URL: process.env.REACT_APP_BASE_URL || "http://localhost:8000/api",
    CONTACT_AVATAR: process.env.REACT_APP_CONTACT_AVATAR,
    CONTACT_NAME: process.env.REACT_APP_CONTACT_NAME,
    CONTACT_DESCRIPTION: process.env.REACT_APP_CONTACT_DESCRIPTION || "",
    CONTACT_GITHUB: process.env.REACT_APP_CONTACT_GITHUB,
    CONTACT_LINKEDIN: process.env.REACT_APP_CONTACT_LINKEDIN,
    CONTACT_INSTAGRAM: process.env.REACT_APP_CONTACT_INSTAGRAM
}
console.log(process.env);
export default configs;