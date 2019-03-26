await axios({
    method: 'get', //you can set what request you want to be
    url: 'http://localhost:8010/proxy/api/public/login',
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(function(response) {
        store.setState({ 
          is_login: true
        });
        // console.log("Sukses get identity", response)
        self.props.history.replace("/profile");
      }).catch(function(error) {
        // console.log("Gagal get identity, token akan dihapus", error);
        localStorage.removeItem('token')
      });