import { createStore } from 'vuex';

export default createStore({
  // 1. STATE: Uygulamanın merkezi veri deposu.
  // Tüm bileşenlerin erişebileceği veriler burada tutulur.
  state: {
    // user: Kullanıcının giriş yapıp yapmadığını ve kim olduğunu tutar.
    // Başlangıçta null, yani kimse giriş yapmamış.
    user: null, 
    
    // users: Kayıt olan tüm kullanıcıların listesi.
    // Gerçek bir uygulamada bu veritabanından gelir. Biz burada simüle ediyoruz.
    users: [], 
    
    // messages: Sohbetteki tüm mesajların listesi.
    messages: [] 
  },

  // 2. GETTERS: State'deki verileri hesaplamak veya filtrelemek için kullanılır.
  // Bir nevi state için "computed property" gibidir.
  getters: {
    // isAuthenticated: Kullanıcının giriş yapıp yapmadığını kolayca kontrol etmemizi sağlar.
    // Eğer state.user doluysa true, boşsa (null) false döner.
    isAuthenticated: state => !!state.user,
    
    // State'deki tüm mesajları döner.
    allMessages: state => state.messages
  },

  // 3. MUTATIONS: State'i DEĞİŞTİREBİLEN TEK YER burasıdır.
  // Her zaman senkron (anlık) çalışmalıdırlar.
  mutations: {
    // SET_USER: Kullanıcı giriş yaptığında veya çıkış yaptığında state.user'ı günceller.
    SET_USER(state, user) {
      state.user = user;
    },
    
    // REGISTER_USER: Yeni bir kullanıcıyı state.users listesine ekler.
    REGISTER_USER(state, user) {
      state.users.push(user);
    },
    
    // ADD_MESSAGE: Sohbete yeni bir mesaj ekler.
    ADD_MESSAGE(state, message) {
      state.messages.push(message);
    }
  },

  // 4. ACTIONS: Asenkron (zaman alan) işlemler ve mutation'ları çağırmak için kullanılır.
  // Örneğin, bir API'ye istek göndermek veya form mantığını işlemek.
  actions: {
    // register: Kayıt olma işlemini yönetir.
    register({ commit, state }, userData) {
      return new Promise((resolve, reject) => {
        // Kullanıcı adı daha önce alınmış mı diye kontrol et.
        const userExists = state.users.some(user => user.username === userData.username);
        if (userExists) {
          // Eğer kullanıcı adı varsa, işlemi reddet.
          reject('Username already exists.');
        } else {
          // Eğer kullanıcı adı uygunsa...
          // Yeni kullanıcı objesini oluştur. (ID'yi basitçe liste uzunluğu olarak belirliyoruz)
          const newUser = { id: state.users.length + 1, ...userData };
          // Mutation'ı çağırarak kullanıcıyı state'e kaydet.
          commit('REGISTER_USER', newUser);
          // İşlemin başarılı olduğunu bildir.
          resolve(newUser);
        }
      });
    },

    // login: Giriş yapma işlemini yönetir.
    login({ commit, state }, credentials) {
        return new Promise((resolve, reject) => {
            // Kullanıcıyı kullanıcı adına göre bul.
            const user = state.users.find(u => u.username === credentials.username);

            // Kullanıcı bulunduysa ve şifre doğruysa...
            if (user && user.password === credentials.password) {
                // SET_USER mutation'ı ile state.user'ı güncelle.
                commit('SET_USER', user);
                resolve(user);
            } else {
                // Eğer kullanıcı bulunamadıysa veya şifre yanlışsa, işlemi reddet.
                reject('Invalid username or password.');
            }
        });
    },

    // logout: Çıkış yapma işlemini yönetir.
    logout({ commit }) {
      // state.user'ı null yaparak kullanıcıyı çıkış yapmış say.
      commit('SET_USER', null);
    },
    
    // postMessage: Yeni bir sohbet mesajı gönderme işlemini yönetir.
    postMessage({ commit, state }, messageText) {
        if (!state.user) return; // Eğer kullanıcı giriş yapmamışsa hiçbir şey yapma.

        const newMessage = {
            id: state.messages.length + 1,
            userId: state.user.id,
            username: state.user.username,
            text: messageText,
            timestamp: new Date()
        };
        commit('ADD_MESSAGE', newMessage);
    }
  },
  
  // 5. MODULES: Büyük uygulamalarda store'u modüllere ayırmak için kullanılır.
  // Bizim projemiz için şimdilik gerekli değil.
  modules: {
  }
})