import createStore from "unistore";
import axios from "axios";

const initialState = {
  token: "",
  username: "",
  password: "",
  is_login: false,
  nama_kontakkami : "",
  email_kontakkami : "",
  nomor_telepon_kontakkami : "",
  pesan_kontakkami : "",
  status_register : "",
  name : "",
  email : "",
  phone_number : "",
  testimoni : "",
  listMobil: [],
  mobilDetail : [],
  userDetail : []
};

export const store = createStore(initialState);

export const actions = store => ({
  setField: (state, event) => {
    return { [event.target.name]: event.target.value };
  },

  postLogout: state => {
    return { is_login: false };
  },

  postLogin: async state => {

    const data = { username: state.username, password: state.password };
    await axios
      .post("http://localhost:8010/proxy/user/login", data)
      .then(response => {
        if (response.data.hasOwnProperty("Token")) {
          store.setState({
            token: response.data.Token,
            is_login: true,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postKontakKami: async state => {
    const data = { nama : state.nama, email : state.email, nomor_telepon : state.nomor_telepon, pesan : state.pesan };
    await axios
      .post("http://localhost:8010/proxy/kontakkami", data)
      .then(response => {
        if (response.data.hasOwnProperty("Status")) {
          store.setState({
            nama_kontakkami: response.data.Data.nama,
            email_kontakkami : response.data.Data.email,
            nomor_telepon_kontakkami : response.data.Data.nomor_telepon,
            pesan_kontakkami : response.data.Data.pesan,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postRegister: async state => {
    const data = { name : state.name, email : state.email, phone_number : state.phone_number, username : state.username, password : state.password };
    await axios
      .post("http://localhost:8010/proxy/user/register", data)
      .then(response => {
        if (response.data.hasOwnProperty("Status")) {
          store.setState({
            status_register: response.data.Status,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postTestimoni: async state => {
    await axios({
      method: 'post', //you can set what request you want to be
      url: 'http://localhost:8010/proxy/testimoni',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTM1ODg2MzMsIm5iZiI6MTU1MzU4ODYzMywianRpIjoiYmRkYTgwZTktOTg4MC00MzViLTk2NDEtZDg1OTM4NmYwNGRjIiwiZXhwIjoxNTUzNjc1MDMzLCJpZGVudGl0eSI6eyJpZCI6MSwibmFtZSI6IkhpbG1hbiBZYW51YXIgUmFobWFkaSIsImVtYWlsIjoiaGlsbWFuQGFscGhhdGVjaC5pZCIsInBob25lX251bWJlciI6IjA4MjEzMTY2OTQ1NCIsInVzZXJuYW1lIjoiaGlsbWFuIiwicGFzc3dvcmQiOiJoaWxtYW4iLCJtb2RlIjoiYWRtaW4iLCJjcmVhdGVkX2F0IjoiV2VkIE1hciAyMCAxODowNToyOSAyMDE5IiwidXBkYXRlZF9hdCI6bnVsbH0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJuYW1lIjoiSGlsbWFuIFlhbnVhciBSYWhtYWRpIiwiZW1haWwiOiJoaWxtYW5AYWxwaGF0ZWNoLmlkIiwicGhvbmVfbnVtYmVyIjoiMDgyMTMxNjY5NDU0IiwidXNlcm5hbWUiOiJoaWxtYW4iLCJwYXNzd29yZCI6ImhpbG1hbiIsIm1vZGUiOiJhZG1pbiIsImNyZWF0ZWRfYXQiOiJXZWQgTWFyIDIwIDE4OjA1OjI5IDIwMTkiLCJ1cGRhdGVkX2F0IjpudWxsfX0.dRZjZVyTvjA8wVOFMWG_k3p64aMW1Nzdy807Ead81NA'
      },
      data : { testimoni : state.testimoni}
    }).then(response => {
        if (response.data.hasOwnProperty("Data")) {
          store.setState({
            testimoni: response.data.Data,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    },

  getAllMobil: async state => {
    await axios
      .get(
        "http://localhost:8010/proxy/mobil"
      )
      .then(function(response) {
        store.setState({
          listMobil : response.data.Data,
          mobilDetail : response.data.Data[0]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  putUser: async state => {
    await axios({
      method: 'put', //you can set what request you want to be
      url: 'http://localhost:8010/proxy/user/1',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTM1ODg2MzMsIm5iZiI6MTU1MzU4ODYzMywianRpIjoiYmRkYTgwZTktOTg4MC00MzViLTk2NDEtZDg1OTM4NmYwNGRjIiwiZXhwIjoxNTUzNjc1MDMzLCJpZGVudGl0eSI6eyJpZCI6MSwibmFtZSI6IkhpbG1hbiBZYW51YXIgUmFobWFkaSIsImVtYWlsIjoiaGlsbWFuQGFscGhhdGVjaC5pZCIsInBob25lX251bWJlciI6IjA4MjEzMTY2OTQ1NCIsInVzZXJuYW1lIjoiaGlsbWFuIiwicGFzc3dvcmQiOiJoaWxtYW4iLCJtb2RlIjoiYWRtaW4iLCJjcmVhdGVkX2F0IjoiV2VkIE1hciAyMCAxODowNToyOSAyMDE5IiwidXBkYXRlZF9hdCI6bnVsbH0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJuYW1lIjoiSGlsbWFuIFlhbnVhciBSYWhtYWRpIiwiZW1haWwiOiJoaWxtYW5AYWxwaGF0ZWNoLmlkIiwicGhvbmVfbnVtYmVyIjoiMDgyMTMxNjY5NDU0IiwidXNlcm5hbWUiOiJoaWxtYW4iLCJwYXNzd29yZCI6ImhpbG1hbiIsIm1vZGUiOiJhZG1pbiIsImNyZWF0ZWRfYXQiOiJXZWQgTWFyIDIwIDE4OjA1OjI5IDIwMTkiLCJ1cGRhdGVkX2F0IjpudWxsfX0.dRZjZVyTvjA8wVOFMWG_k3p64aMW1Nzdy807Ead81NA'
      },
      data : { name : state.name, email : state.email, phone_number : state.phone_number, username : state.username, password : state.password }
    }).then(response => {
        if (response.data.hasOwnProperty("Data")) {
          store.setState({
            testimoni: response.data.Data,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    },

    getUser: async state => {
      await axios({
        method: 'get', //you can set what request you want to be
        url: 'http://localhost:8010/proxy/user/1',
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTM1ODg2MzMsIm5iZiI6MTU1MzU4ODYzMywianRpIjoiYmRkYTgwZTktOTg4MC00MzViLTk2NDEtZDg1OTM4NmYwNGRjIiwiZXhwIjoxNTUzNjc1MDMzLCJpZGVudGl0eSI6eyJpZCI6MSwibmFtZSI6IkhpbG1hbiBZYW51YXIgUmFobWFkaSIsImVtYWlsIjoiaGlsbWFuQGFscGhhdGVjaC5pZCIsInBob25lX251bWJlciI6IjA4MjEzMTY2OTQ1NCIsInVzZXJuYW1lIjoiaGlsbWFuIiwicGFzc3dvcmQiOiJoaWxtYW4iLCJtb2RlIjoiYWRtaW4iLCJjcmVhdGVkX2F0IjoiV2VkIE1hciAyMCAxODowNToyOSAyMDE5IiwidXBkYXRlZF9hdCI6bnVsbH0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJuYW1lIjoiSGlsbWFuIFlhbnVhciBSYWhtYWRpIiwiZW1haWwiOiJoaWxtYW5AYWxwaGF0ZWNoLmlkIiwicGhvbmVfbnVtYmVyIjoiMDgyMTMxNjY5NDU0IiwidXNlcm5hbWUiOiJoaWxtYW4iLCJwYXNzd29yZCI6ImhpbG1hbiIsIm1vZGUiOiJhZG1pbiIsImNyZWF0ZWRfYXQiOiJXZWQgTWFyIDIwIDE4OjA1OjI5IDIwMTkiLCJ1cGRhdGVkX2F0IjpudWxsfX0.dRZjZVyTvjA8wVOFMWG_k3p64aMW1Nzdy807Ead81NA'
        }
      }).then(response => {
          if (response.data.hasOwnProperty("Data")) {
            console.log("get user", response.data);
            store.setState({
              userDetail : response.data.Data
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      },

});

