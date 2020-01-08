const setAuthorizedToLS = (name: string | null) => {
  localStorage.setItem('authorized', JSON.stringify(name));
};

const delayedAction = async (errorValue: string) =>
  new Promise((resolve, reject) => {
    if (Math.random() > 0.3) {
      setTimeout(() => resolve(true), 800);
    } else {
      setTimeout(() => {
        reject(errorValue);
      }, 400);
    }
  });

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  return delayedAction('Registration failed, network error').then(() => {
    localStorage.setItem(
      'fakeCreds',
      JSON.stringify({ email, password, name })
    );
    return true;
  });
};

export const login = async (email: string, password: string) => {
  return delayedAction('Login failed, network error').then(() => {
    const key = localStorage.getItem('fakeCreds');
    if (key) {
      const parsed = JSON.parse(key);
      if (parsed.email === email && parsed.password === password) {
        setAuthorizedToLS(parsed.name);
        return parsed.name;
      }
    }
    return false;
  });
};

export const logout = () => {
  setAuthorizedToLS(null);
};
