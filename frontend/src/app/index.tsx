import { Routing } from '../pages';
import { withProviders } from './providers';

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default withProviders(App);
