import axios from "axios";

const setUserData = ({ role, name }) => {
  localStorage.setItem("userData", JSON.stringify({ role, name }));
};

export const isLogin = () => {
  if (localStorage.getItem("userData")) return true;
  return false;
};

export const login = async ({ history, username, password }) => {
  await axios
    .post("https://shopeexpress.herokuapp.com/api/v1/member/login", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.dataValues != null) {
        const {
          role: { role },
          user,
        } = res.data.dataValues;
        setUserData({ role, name: user });
      } else {
        history.push("/");
      }
    });

  if (JSON.parse(localStorage.getItem("userData")).role === "Admin") {
    history.push("/history");
  } else {
    history.push("/employee");
  }
  // console.log({  parse: JSON.parse(getUserData) });
};
