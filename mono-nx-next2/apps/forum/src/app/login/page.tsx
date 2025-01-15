import { AuthComponent } from '@mono-nx-next2/lib-ui';
import styles from './page.module.css';

export default function Login() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
      <AuthComponent />
    </div>
  );
}
