(function () {
  "use strict";

  const firebaseConfig = {
    apiKey: "AIzaSyBWKHZe-IcnxfvnxtsoyREibQKqroEmKD4",
    authDomain: "naraku-award.firebaseapp.com",
    projectId: "naraku-award",
    storageBucket: "naraku-award.firebasestorage.app",
    messagingSenderId: "655976339122",
    appId: "1:655976339122:web:d22f72d1b567746a4d5bab",
    measurementId: "G-KTKJRZN54P",
  };

  const DISCORD_CLIENT_ID = "1509938166721806387";
  const FIREBASE_VERSION = "10.12.5";
  const COLLECTIONS = {
    votes: "votes",
    users: "users",
    categories: "categories",
    comments: "comments",
    settings: "settings",
  };

  const state = {
    app: null,
    db: null,
    auth: null,
    analytics: null,
    configured: Boolean(
      firebaseConfig.apiKey &&
        firebaseConfig.authDomain &&
        firebaseConfig.projectId &&
        firebaseConfig.appId
    ),
    loading: null,
    modules: null,
  };

  async function loadFirebase() {
    if (!state.configured) {
      return state;
    }

    if (state.loading) {
      return state.loading;
    }

    state.loading = Promise.all([
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-analytics.js`),
    ]).then(async ([appModule, firestoreModule, authModule, analyticsModule]) => {
      state.modules = {
        app: appModule,
        firestore: firestoreModule,
        auth: authModule,
        analytics: analyticsModule,
      };

      state.app = appModule.initializeApp(firebaseConfig);
      state.db = firestoreModule.getFirestore(state.app);
      state.auth = authModule.getAuth(state.app);

      if (await analyticsModule.isSupported()) {
        state.analytics = analyticsModule.getAnalytics(state.app);
      }

      return state;
    });

    return state.loading;
  }

  async function signInWithDiscord() {
    await loadFirebase();

    if (!state.configured) {
      throw new Error("Firebase is not configured. Demo login will be used.");
    }

    // TODO: In Firebase Authentication, configure the Discord provider as oidc.discord.
    // Discord client id for that provider: 1509938166721806387
    // Add the matching Discord OAuth client secret in the Firebase console.
    const provider = new state.modules.auth.OAuthProvider("oidc.discord");
    provider.addScope("identify");
    provider.addScope("email");
    provider.setCustomParameters({
      client_id: DISCORD_CLIENT_ID,
      prompt: "consent",
    });

    return state.modules.auth.signInWithPopup(state.auth, provider);
  }

  async function signOutUser() {
    await loadFirebase();

    if (!state.configured) {
      return;
    }

    return state.modules.auth.signOut(state.auth);
  }

  async function onAuthChanged(callback) {
    await loadFirebase();

    if (!state.configured) {
      callback(null);
      return function noop() {};
    }

    return state.modules.auth.onAuthStateChanged(state.auth, callback);
  }

  window.NarakuFirebase = {
    COLLECTIONS,
    config: firebaseConfig,
    discordClientId: DISCORD_CLIENT_ID,
    isConfigured: function () {
      return state.configured;
    },
    loadFirebase,
    signInWithDiscord,
    signOutUser,
    onAuthChanged,
    get db() {
      return state.db;
    },
    get auth() {
      return state.auth;
    },
    get analytics() {
      return state.analytics;
    },
    get modules() {
      return state.modules;
    },
  };
})();
