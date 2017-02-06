import { Provider } from 'mobx-react';
import Calendar from './components/Calendar';
import stores from './stores';

export default () => (
  <Provider {...stores}>
    <div>
      <Calendar/>
    </div>
  </Provider>
);
