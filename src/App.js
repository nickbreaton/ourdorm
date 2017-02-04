// vendor
import { Provider } from 'mobx-react';
// components
import Calendar from './components/Calendar';
// stores
import calendar from './stores/calendar';

export default () => (
  <Provider calendar={calendar}>
    <div>
      <Calendar/>
    </div>
  </Provider>
);
