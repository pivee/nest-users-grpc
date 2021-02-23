export const mock__configService = {
  get(key: string) {
    switch (key) {
      case 'PORT':
        return '5001';
      case 'POSTGRES_PORT':
        return '5432';
      case 'POSTGRES_HOST':
        return 'localhost';
      case 'POSTGRES_USER':
        return 'username';
      case 'POSTGRES_PASSWORD':
        return 'password';
      case 'POSTGRES_DB':
        return 'database';
    }
  },
};
